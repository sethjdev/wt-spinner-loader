import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders Button component", () => {
    render(<Button />);
  });
  test("Test click event", () => {
    const mockCallBack = jest.fn();
    render(<Button onClick={mockCallBack} label={"Start"} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockCallBack).toHaveBeenCalled();
  });
});
