import React, { useState, useEffect } from "react";
import "./App.css";
import FormTodo from "./components/FormTodo";
import ToDoList from "./components/ToDoList";

function App() {
  // Estado
  const [inputTodo, setInputTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Usar useEffect para cargar los datos desde localStorage cuando la aplicación se monta
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Usar useEffect para guardar los datos en localStorage cuando los todos cambian
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function submitTodoHandler(newTodo) {
    setTodos([...todos, newTodo]);
    setInputTodo("");
  }

  // Filtrar los todos según el filtro seleccionado
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    }
    if (filter === "uncompleted") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div className="App">
      <header>
        <h1>Valentina's to do list</h1>
      </header>
      <FormTodo
        inputTodo={inputTodo}
        todos={todos}
        setTodos={setTodos}
        setInputTodo={setInputTodo}
        onSubmitTodo={submitTodoHandler}
        setFilter={setFilter}
      />

      <ToDoList todos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
