import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../../src/components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByRole("textbox");
  const addButton = screen.getByText(/Add/i);

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
