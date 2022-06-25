'use strict'

function TodoForm ({addTodo}) {

  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    
    <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                className="form-control"
                type='text'
                name='list'
                value={value}
                placeholder='Add ToDo ...'
                onChange={e => setValue(e.target.value)}
              />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">ADD TODO</button>
            </div>
      </form>
  );

};