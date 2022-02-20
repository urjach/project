import React from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import AddTodo from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, text: "Wash dishes", done: true },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false },
  ]);
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <Todolist todos={todos} setTodos={setTodos} />
      <AddTodo setTodos={setTodos} />
    </div>
  );
}
