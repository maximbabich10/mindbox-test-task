import React from "react";
import TodoItem from "../item/Todoitem";

type TodoListProps = {
  todos: { text: string; completed: boolean }[];
  toggleTodo: (index: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleTodo={() => toggleTodo(index)}
        />
      ))}
    </div>
  );
};

export default TodoList;
