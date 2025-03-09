import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

test("renders the initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a project")).toBeInTheDocument();
});

test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByRole("textbox");
    const addButton = screen.getByText("Add Todo");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo item", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
});

test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getAllByText("Delete")[0];

    fireEvent.click(deleteButton);

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
