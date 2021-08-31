import React from "react";

import "./Todo.scss";

function Todo({ row, id, title, removeTodo, checkedTodo }) {
  return (
    <li className="todo-item">
      <input
        className="todo-checkbox"
        checked={row.isCompleted}
        data-id={id}
        type="checkbox"
        onChange={(evt) => checkedTodo(evt)}
      ></input>
      <span className="todo-span"> {title}</span>
      <button
        className="todo-delete-btn"
        data-id={id}
        onClick={(evt) => removeTodo(evt)}
      >
        Delete
      </button>
    </li>
  );
}

export default Todo;
