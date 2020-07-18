import React from "react";
import { render } from "@testing-library/react";
import LoaderCard from "./LoaderCard";

describe("LoaderCard", () => {
  test("renders LoaderCard component", () => {
    render(<LoaderCard />);
  });
});
