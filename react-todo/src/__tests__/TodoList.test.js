import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Practice Testing")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(addButton);

    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles a todo item", () => {
    render(<TodoList />);
    
    const todoItem = screen.getByText("Learn React");
    fireEvent.click(todoItem);
    
    expect(todoItem).toHaveStyle("text-decoration: line-through");
    
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo item", () => {
    render(<TodoList />);
    
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
