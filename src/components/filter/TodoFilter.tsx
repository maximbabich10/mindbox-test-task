import React from "react";
import styles from "../filter/todo-filter.module.css";

type TodoFilterProps = {
  remainingCount: number;
  filter: "all" | "active" | "completed";
  setFilter: (filter: "all" | "active" | "completed") => void;
  clearCompleted: () => void;
};

const TodoFilter: React.FC<TodoFilterProps> = ({
  remainingCount,
  filter,
  setFilter,
  clearCompleted,
}) => {
  return (
    <div className={styles.filters}>
      <span>{remainingCount} items left</span>
      <div className={styles.wrapButtons}>
        <button
          onClick={() => setFilter("all")}
          className={`${styles.filterButton} ${
            filter === "all" ? styles.active : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`${styles.filterButton} ${
            filter === "active" ? styles.active : ""
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`${styles.filterButton} ${
            filter === "completed" ? styles.active : ""
          }`}
        >
          Completed
        </button>
      </div>

      <button className={styles.filterButton} onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
};

export default TodoFilter;
