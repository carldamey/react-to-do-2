import { useState } from "react";

export default function NewToDoForm({ todos, setTodos }) {
  const [newTodo, setNewTodo] = useState("");
  function handleAddTodo(evt) {
    evt.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }
  return (
    <form onSubmit={handleAddTodo}>
      <h2>New To-Do</h2>
      <input
        value={newTodo}
        onChange={(evt) => setNewTodo(evt.target.value)}
        placeholder="New To-Do"
        required
        pattern=".{4}"
      />
      <button type="submit">ADD TO-DO</button>
    </form>
  );
}
