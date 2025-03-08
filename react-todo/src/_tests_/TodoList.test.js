import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders TodoList component", () => {
  render(<TodoList />);
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
});
