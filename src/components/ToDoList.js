import React from "react";
import Todo from "./Todo";
import { Reorder } from "framer-motion";

const ToDoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
        <ul className="todo-list">
          {todos.map((todo) => (
            <Reorder.Item key={todo.id} value={todo}>
              <Todo
                key={todo.id}
                text={todo.text}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                priority={todo.priority}
              />
            </Reorder.Item>
          ))}
        </ul>
      </Reorder.Group>
    </div>
  );
};

export default ToDoList;
