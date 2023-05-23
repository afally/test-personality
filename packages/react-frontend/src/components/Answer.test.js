import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Answer from "./Answer.js";
import result from "../util/result";

jest.mock("../util/result");

test("The response would be rendered", () => {
  result.mockReturnValue("You are an Introvert");
  render(
    <BrowserRouter>
      <Answer />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/You are an introvert/i);
  expect(linkElement).toBeInTheDocument();
});
