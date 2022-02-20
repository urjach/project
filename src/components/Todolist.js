import React from "react";
export default function Todolist({ todos, setTodos }) {
  function handleToggleTodo(todo) {
    // confused by this code? Here's what it says:

    // if a todo's id is equal to the one we clicked on,
    // just update that todo's done value to its opposite,
    // otherwise, do nothing (return it)

    const updatedTodos = todos.map((t) =>
      t.id === todo.id
        ? {
            ...t,
            done: !t.done,
          }
        : t
    );
    setTodos(updatedTodos);
  }
  //console.log(props);
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li
            onClick={() => handleToggleTodo(todo)}
            style={{
              textDecoration: todo.done ? "line-through" : "",
            }}
            key={todo.id}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
