import "./ToDoListItem.css";

export default function ToDoListItem({ todo, index }) {
  return (
    <li
      className="ToDoListItem"
      style={{
        backgroundColor: index % 2 ? "lightgreen" : "orange",
      }}
    >
      <div className="flex-ctr-ctr">{index + 1}</div>
      {todo}
    </li>
  );
}
