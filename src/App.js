import ToDoList from "./ToDoList";
import "./styles.css";

const todos = [
  "Learn React",
  "Catch up On Unit 3",
  "Attend Networking Event"
]

export default function App() {
  return (
    <div className="App">
      <h1>React To-Dos</h1>
      <ToDoList todos={todos}/>
    </div>
  );
}
