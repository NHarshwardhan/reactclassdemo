import React, { useState } from "react";

export default function Todo() {
  const [newTodo, setNewTodo] = useState();

  const [todoItems, setTodoItems] = useState([
    { action: "Buy Flowers", done: false },
    { action: "Buy Ticket", done: true },
  ]);

  const addTodo = () => {
    setTodoItems([...todoItems, { action: newTodo, done: false }]);
  };

  const toggleTodo = (todoRecord) => {
    setTodoItems(
      todoItems.map((todo) =>
        todo.action === todoRecord.action ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const toggleTodoWithIndex = (todoRecordIndex) => {
    setTodoItems(
      todoItems.map((todo, index) =>
        index === todoRecordIndex ? { ...todo, done: !todo.done } : todo
      )
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col m12">
          <h3>Todo List</h3>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="newtodo"
            type="text"
            className="validate"
            onChange={(event) => setNewTodo(event.target.value)}
          />

          <label htmlFor="newtodo">Add New Todo</label>
          <button
            onClick={addTodo}
            className="waves-effect waves-light btn purple darken-4"
          >
            Add Todo
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col m12">
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
              {todoItems.map((todo, index) => (
                <tr key={index}>
                  <td>{todo.action}</td>
                  <td>
                    <label>
                      {/* <input type="checkbox" checked={todo.done} 
                                                onChange={()=>toggleTodo(todo)}
                                         /> */}
                      <input
                        type="checkbox"
                        checked={todo.done}
                        onChange={() => toggleTodoWithIndex(index)}
                      />
                      <span></span>
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
