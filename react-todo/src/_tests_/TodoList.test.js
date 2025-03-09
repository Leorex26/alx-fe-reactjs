import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";
import "@testing-library/jest-dom";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText("Add a new todo");
  const addButton = screen.getByText("Add Todo");

  fireEvent.change(input, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles todo completion", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: line-through");

  fireEvent.click(todoItem);
  expect(todoItem).toHaveStyle("text-decoration: none");
});

test("deletes a todo", () => {
  render(<TodoList />);
  const todoItem = screen.getByText("Learn React");
  const deleteButton = todoItem.nextSibling;

  fireEvent.click(deleteButton);
  expect(todoItem).not.toBeInTheDocument();
});
