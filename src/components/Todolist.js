import React from "react";
export default function Todolist(props) {
  console.log(props);
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}
