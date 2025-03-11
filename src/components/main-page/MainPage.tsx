import React from "react";
import useTodo from "../../hooks/useTodo";
import TodoInput from "../input/TodoInput";
import TodoList from "../list/TodoList";
import TodoFilter from "../filter/TodoFilter";
import styles from "../main-page/main-page.module.css";

const MainPage: React.FC = () => {
  const {
    addTodo,
    clearCompleted,
    filter,
    filteredTodos,
    remainingCount,
    setFilter,
    toggleTodo,
  } = useTodo();

  return (
    <div className={styles.container}>
      <h1>todos</h1>
      <div className={styles.wrapForm}>
        <TodoInput addTodo={addTodo} />
        <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />

        <TodoFilter
          remainingCount={remainingCount}
          filter={filter}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </div>
  );
};

export default MainPage;
