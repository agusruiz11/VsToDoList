import React, { useState } from "react";

const FormTodo = (props) => {
  // States
  const [inputTodo, setInputTodo] = useState("");
  const [filter, setFilter] = useState("all"); // Estado para el filtro [all, completed, uncompleted]
  const [error, setError] = useState(""); // Estado para el mensaje de error

  // Handlers
  function inputTextHandler(e) {
    setInputTodo(e.target.value);
    if (error) {
      setError(""); // Limpiar el error al cambiar el texto
    }
  }

  function filterHandler(e) {
    setFilter(e.target.value);
    props.setFilter(e.target.value);
  }

  // Function add to_do
  function submitTodoHandler(e) {
    e.preventDefault();
    if (inputTodo === "") {
      setError("Hey, you must write something! this can't be empty.");
      return;
    }
    const newTodo = {
      text: inputTodo,
      completed: false,
      id: Math.random() * 1000,
    };
    props.setTodos([...props.todos, newTodo]);
    setInputTodo("");
  }

  return (
    <form className="form-container">
      <div className="input-container">
        <input
          value={inputTodo}
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          placeholder="enter what's next to do..."
        />
        {error && <p className="error-message">{error}</p>}
      </div>
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <div className="select">
        <select className="filter-todo" onChange={filterHandler} value={filter}>
          <option value="all">All</option>
          <option value="completed">Done</option>
          <option value="uncompleted">Not yet</option>
        </select>
      </div>
    </form>
  );
};

export default FormTodo;
