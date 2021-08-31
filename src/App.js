import React, { useState, useRef } from "react";
import "./App.scss";

import "./Components/Modal/Modal.scss";

// images
import MrBean from "./Assests/Images/english.jpg";
import ashamed from "./Assests/Images/ashamed.png";

import Todo from "./Components/Todo/Todo";
// import Modal from "./Components/Modal/Modal";

function App() {
  const elModal = useRef(null);

  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );

  const handleKeyUpInput = (evt) => {
    if (evt.code === "Enter") {
      const newTodo = {
        id: todos[todos.length - 1]?.id + 1 || 0,
        title: evt.target.value.trim(),
        isCompleted: false,
      };

      setTodos([...todos, newTodo]);

      window.localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));

      evt.target.value = null;
    }
  };
  const handleRemoveTodo = (evt) => {
    const { id } = evt.target.dataset;
    const filteredTodo = todos.filter((row) => row.id !== Number(id));
    setTodos(filteredTodo);
    window.localStorage.setItem("todos", JSON.stringify(filteredTodo));
  };

  const handleCheckedTodo = (evt) => {
    const { id } = evt.target.dataset;
    const foundTodo = todos.find((row) => row.id === Number(id));

    foundTodo.isCompleted = !foundTodo.isCompleted;
    if (foundTodo.isCompleted) {
      evt.target.nextElementSibling.classList.add("todo-span-done");
    } else {
      evt.target.nextElementSibling.classList.remove("todo-span-done");
    }

    setTodos([...todos]);
    window.localStorage.setItem("todos", JSON.stringify([...todos]));
  };

  return (
    <>
      <div className="todo-wrapper container">
        <h1 className="todo-heading">to-do list</h1>
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done? (except PUBG)"
          onKeyUp={handleKeyUpInput}
          onChange={(evt) => {
            if (
              evt.target.value.trim() === "to play PUBG" ||
              evt.target.value.trim() === "PUBG" ||
              evt.target.value.trim() === "to play pubg" ||
              evt.target.value.trim() === "pubg"
            ) {
              elModal.current.classList.add("modal--active");
              evt.target.value = null;
            }
          }}
        />

        <ul className="todo-list">
          {todos.length > 0 &&
            todos.map((row) => (
              <Todo
                key={row.id}
                title={row.title}
                id={row.id}
                removeTodo={handleRemoveTodo}
                checkedTodo={handleCheckedTodo}
                row={row}
              />
            ))}
        </ul>
        {/* <Modal /> */}
        <div className="modal" ref={elModal}>
          <div className="modal-inner">
            <img
              className="modal__img"
              src={MrBean}
              alt="Mr Bean"
              width={200}
              height={100}
            />
            <button
              className="modal__btn"
              onClick={() => {
                elModal.current.classList.remove("modal--active");
              }}
            >
              Oops. You got me again
              <img
                className="modal__ashamed"
                src={ashamed}
                alt="ashamed"
                width={35}
                height={35}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
