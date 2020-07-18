import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import LoaderContainer from "./LoaderContainer";

describe("LoaderContainer", () => {
  test("renders LoaderContainer component", () => {
    render(<LoaderContainer />);
  });
  test("start button is enabled on load", () => {
    render(<LoaderContainer />);
    expect(screen.getByText("Start").disabled).toBe(false);
  });
  test("stop button is disabled on load", () => {
    render(<LoaderContainer />);
    expect(screen.getByText("Stop").disabled).toBe(true);
  });
  test("reset button is disabled on load", () => {
    render(<LoaderContainer />);
    expect(screen.getByText("Reset").disabled).toBe(true);
  });
});
