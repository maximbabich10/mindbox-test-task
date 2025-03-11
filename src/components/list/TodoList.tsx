import React from "react";
import TodoItem from "../item/Todoitem";
import { Todo } from "../../types/todo";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};



const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={() => toggleTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
