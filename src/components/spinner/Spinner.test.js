import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
  test("renders Spinner component with correct percentage", () => {
    const state = {
      started: true,
      progress: 50,
      complete: false,
    };

    render(
      <Spinner
        started={state.started}
        progress={state.progress}
        complete={state.complete}
      />
    );
    expect(screen.getByText(`${state.progress}`)).toBeInTheDocument();
  });
});
