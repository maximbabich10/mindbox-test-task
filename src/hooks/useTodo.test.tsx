import { act, renderHook } from "@testing-library/react";
import useTodo from "./useTodo";

describe("useTodo hook", () => {
  it("should add a todo", () => {
    const { result } = renderHook(() => useTodo());

    expect(result.current.todos.length).toBe(0);

    act(() => {
      result.current.addTodo("Test Task");
    });

    expect(result.current.todos.length).toBe(1);
    expect(result.current.todos[0].text).toBe("Test Task");
    expect(result.current.todos[0].completed).toBe(false);
  });
});
