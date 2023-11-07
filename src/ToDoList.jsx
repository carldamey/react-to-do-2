import ToDoListItem from "./ToDoListItem";
import "./ToDoList.css";

export default function ToDoList({ todos }) {
  return (
    <ul className="ToDoList">
      {todos.map((todo, idx) => (
        <ToDoListItem todo={todo} key={idx} index={idx}/>
      ))}
    </ul>
  );
}
