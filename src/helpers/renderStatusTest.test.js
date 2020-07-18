import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import renderStatusText from "./renderStatusText";
import consts from "../consts";

describe("renderStatusText tests", () => {
  test("renders status ready to upload", () => {
    const state = {
      started: false,
      progress: 0,
      complete: false,
    };
    expect(
      renderStatusText(state.started, state.progress, state.complete)
    ).toBe(consts.READY_TO_UPLOAD);
  });
  test("renders status uploading", () => {
    const state = {
      started: true,
      progress: 10,
      complete: false,
    };
    expect(
      renderStatusText(state.started, state.progress, state.complete)
    ).toBe(consts.UPLOADING);
  });
  test("renders status completed", () => {
    const state = {
      started: false,
      progress: 100,
      complete: true,
    };
    expect(
      renderStatusText(state.started, state.progress, state.complete)
    ).toBe(consts.UPLOAD_COMPLETE);
  });
  test("renders status resume uploading", () => {
    const state = {
      started: false,
      progress: 50,
      complete: false,
    };
    expect(
      renderStatusText(state.started, state.progress, state.complete)
    ).toBe(consts.RESUME_UPLOAD);
  });
});
