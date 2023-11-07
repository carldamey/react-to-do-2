import "./ToDoListItem.css";

export default function ToDoListItem({ todo, index }) {
  return (
    <li
      className="ToDoListItem"
      style={{
        backgroundColor: index % 2 ? "lightgreen" : "orange",
      }}
    >
      <span
        style={{
          backgoundColor: "red",
          color: "white",
          borderRadius: "50%",
          paddingRight: "3rem",
          alignSelf: "flex-end",
        }}
      >
        {index + 1}
      </span>
      {todo}
    </li>
  );
}
