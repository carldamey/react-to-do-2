import { useState } from "react";

export default function NewToDoForm({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");
  function handleAddTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }
  return (
    <>
      <h2>New To-Do</h2>
      <input
        value={newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
        placeholder="New To-Do"
      />
      <button onClick={handleAddTodo}>ADD TO-DO</button>
    </>
  );
}
