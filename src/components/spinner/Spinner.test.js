import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  test("renders Spinner component", () => {
    render(<Spinner />);
  });
});
