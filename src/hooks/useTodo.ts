import { useState } from "react";
import { Todo } from "../types/todo";

function useTodo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  const addTodo = (text: string) => {
    const length = todos.length;
    const lastId = length ? todos[length - 1].id : 1;
    setTodos((prev) => [...prev, { text, completed: false, id: lastId + 1 }]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }
    if (filter === "completed") {
      return todo.completed;
    }
    return true;
  });

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  return {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    filteredTodos,
    remainingCount,
    clearCompleted,
  };
}

export default useTodo;
