import React, { useState } from "react";
import styles from "../input/todo-input.module.css";

type TodoInputProps = {
  addTodo: (text: string) => void;
};

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    if (text) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <div className={styles.wrapInput}>
      <input
        className={styles.input}
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
