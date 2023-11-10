import ToDoList from "./ToDoList";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    "Learn React",
    "Catch up On Unit 3",
    "Attend Networking Event",
  ]);
  const [showTodos, setShowTodos] = useState(true);
  return (
    <div className="App">
      <h1>React To-Dos</h1>
      <button onClick={setShowTodos(!showTodos)}>
        {showTodos ? "HIDE" : "SHOW"}
      </button>
      <ToDoList todos={todos} />
    </div>
  );
}
