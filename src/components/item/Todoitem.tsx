import React from "react";
import styles from "../item/todo-item.module.css";

type TodoItemProps = {
  todo: { text: string; completed: boolean };
  toggleTodo: () => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className={styles.item}>
      <input type="checkbox" checked={todo.completed} onChange={toggleTodo} />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
    </div>
  );
};

export default TodoItem;
