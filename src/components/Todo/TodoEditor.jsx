import { useState } from "react";
export const TodoEditor = ({ addTodo }) => {
  const [textValue, setTextValue] = useState("");
  const handleSubmit = () => {
    event.preventDefault();
    const value = event.currentTarget.elements.create.value;
    addTodo(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Create one more
        <textarea name="create"></textarea>
        <button type="submit">Create</button>
      </label>
      <br />
    </form>
  );
};
