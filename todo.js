'use strict'

function Todo ({todo, index, remove}) {

  function handle () {

    remove(index);

  };

  return (

      <div className="list-group">
        <span className="list-group-item list-group-item-action" aria-current="true">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">{todo.text}</h5>
            <small>{todo.createdOn}</small>
          </div>
          <small className="delete" onClick={handle}>Delete</small>
        </span>
      </div>      

  );

};