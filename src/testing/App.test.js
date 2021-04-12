import { render, screen } from "@testing-library/react";
import App from "../components/App";

it("renders What's in your cupboard? title", () => {
  render(<App />);
  const linkElement = screen.getByText("What's in your cupboard?");
  expect(linkElement).toBeInTheDocument();
});

it("renders correctly", () => {
  const { asFragment } = render(
    <App />
  );
  expect(asFragment).toMatchSnapshot();
});