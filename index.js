'use strict'

function App () {

  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
      createdOn: 'Friday 6/24/2022 22:13:31'
    },
    {
      text: 'learn more react',
      isCompleted: false,
      createdOn: 'Friday 6/24/2022 22:13:31'
    },
    {
      text: 'realy learn more react',
      isCompleted: false,
      createdOn: 'Friday 6/24/2022 22:13:31'
    },
  ]);

  const currentDate = () => {
    const date = new Date();
    let day = '';
    if (date.getDay() == 1) day = "Monday";
    if (date.getDay() == 2) day = "Tuesday";
    if (date.getDay() == 3) day = "Wednesday";
    if (date.getDay() == 4) day = "Thursday";
    if (date.getDay() == 5) day = "Friday";
    if (date.getDay() == 6) day = "Saturday";
    if (date.getDay() == 7) day = "Sunday";

    const currentDateStr = day + ' ' + date.toLocaleDateString() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    
    return currentDateStr;
  }
  
  const addTodo = text => {
    const newTodos = [...todos, {text: text, isComplete: false, createdOn: currentDate()}];
    setTodos(newTodos);
  }

  const removeTodos = index => {
    const tempTodos = [...todos];
    tempTodos.splice(index, 1);
    setTodos(tempTodos);
  }

  return (
    <div className="container" style={{width:'45%'}}>
      
      <h1>ToDo List</h1>
      {todos.map((todo, i) => 
        <Todo index={i} key={i} todo={todo} remove={removeTodos}/>
      )}
        <TodoForm addTodo={addTodo}/>
        
    </div>
  );

};  // END OF APP()

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);