import ToDoListItem from "./ToDoListItem";

export default function ToDoList() {
  const str = "SEI";
  const score = 94;
  const misc = [
    "String",
    74,
    true,
    <div>
      <h3>Element from the Array!</h3>
    </div>
  ];
  return (
    <ul>
      <ToDoListItem />
      <ToDoListItem />
      <li>Number: {score}</li>
      <li>String: {str}</li>
      <li>Math.random(): {Math.random() * 100}</li>
      <li>Template Literal: {`${str} Rocks`}</li>
      <li>Ternary: {score > 90 ? "A" : "B or less"}</li>
      <li>
        Booleans, null & undefined: {true}
        {false}
        {null}
        {undefined}
      </li>
      <li>Logical &&: {score > 90 && <div>Got an 'A'!</div>}</li>
      <li>{misc}</li>
    </ul>
  );
}
