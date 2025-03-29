import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";
import { fetchUserData } from "../services/githubService";

jest.mock("../services/githubService");

test("renders search input", () => {
  render(<Search />);
  expect(screen.getByPlaceholderText("Enter GitHub username...")).toBeInTheDocument();
});

test("calls GitHub API on search", async () => {
  fetchUserData.mockResolvedValue({
    login: "octocat",
    name: "The Octocat",
    avatar_url: "https://github.com/images/error/octocat_happy.gif",
    html_url: "https://github.com/octocat",
  });

  render(<Search />);
  const input = screen.getByPlaceholderText("Enter GitHub username...");
  const button = screen.getByText("Search");

  fireEvent.change(input, { target: { value: "octocat" } });
  fireEvent.click(button);

  expect(await screen.findByText("The Octocat")).toBeInTheDocument();
  expect(await screen.findByText("Username: octocat")).toBeInTheDocument();
  expect(fetchUserData).toHaveBeenCalledWith("octocat");
});

test("displays error message when user is not found", async () => {
  fetchUserData.mockResolvedValue(null);

  render(<Search />);
  const input = screen.getByPlaceholderText("Enter GitHub username...");
  const button = screen.getByText("Search");

  fireEvent.change(input, { target: { value: "unknownuser123" } });
  fireEvent.click(button);

  expect(await screen.findByText("Looks like we can't find the user.")).toBeInTheDocument();
});
