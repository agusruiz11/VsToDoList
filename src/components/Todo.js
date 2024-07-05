import React from "react";

const Todo = ({ text, todos, setTodos, todo, priority }) => {
  function deleteHandler() {
    setTodos(todos.filter((el) => el.id !== todo.id));
  }

  function completeHandler() {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  }

  return (
    <div className={`${todo.completed ? "todo-done" : "todo"}`}>
      <div className="todo-content">
        <span className={`todo-item ${todo.completed ? "completed" : ""}`}>
          {text}
        </span>
        <span className="priority">{priority}</span>
      </div>
      <div className="todo-actions">
        <button
          onClick={completeHandler}
          className={`${todo.completed ? "notComplete" : "complete"}-btn`}
        >
          <i className={`fas ${todo.completed ? "fa-times" : "fa-check"}`}></i>
        </button>
        <button onClick={deleteHandler} className="trash-btn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Todo;
