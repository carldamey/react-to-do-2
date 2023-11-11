import { useState } from "react";

export default function NewToDoForm({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");
  return (
    <>
      <h2>New To-Do</h2>
      <input
        value={newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
        placeholder="New To-Do"
      />
      <button
        onClick={() => {
          setTodos(newTodo);
          setNewTodo("");
        }}
      >
        ADD TO-DO
      </button>
    </>
  );
}
