import React from "react";
import { render, wait } from "@testing-library/react";
import DocumentTitle from "./DocumentTitle";

describe("DocumentTitle", () => {
  test("renders DocumentTitle component", () => {
    render(<DocumentTitle />);
  });
  test("renders document title correctly", async () => {
    const test_title = "Test Title";
    render(<DocumentTitle title={test_title} />);
    await wait(() => expect(document.title).toEqual(test_title));
  });
});
