import React from "react";
import {
  screen,
  render,
  fireEvent,
  getByPlaceholderText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import BookForm from "../BookForm";

describe("testing form functionality", () => {
  test("if form title value is changed", () => {
    const mockHandleSubmit = jest.fn();
    const component = render(<BookForm />);
    //const input = component.container.querySelector("Entertitle");
    const form = component.container.querySelector("form");
    //const titleNode = screen.getByPlaceholderText("Enter title");
    const titleNode = screen.getByLabelText("title");
    const inputNode = screen.getByPlaceholderText("Enter title");
    /*  await act(async () => {
    fireEvent.change(inputNode, {
      target: { value: "testing of forms could be easier" },
    });
  }); */
    fireEvent.change(titleNode, {
      target: { value: "testing of forms could be easier" },
    });
    /*  await act(async () => {
    fireEvent.submit(form);
  }); */
    //
    expect(titleNode).toHaveDisplayValue("testing of forms could be easier");
    //expect(mockHandleSubmit.mock.calls).toHaveLength(1);
    //expect(inputNode).toHaveTextContent("testing of forms could be easier");
    //expect(postToAPI.mock.calls[0][0].content).toBe(
    // "testing of forms could be easier"
    // );
  });
});
