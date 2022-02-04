import React from "react";
import {
  screen,
  render,
  fireEvent,
  cleanup,
  getByPlaceholderText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom/extend-expect";
import BookForm from "../BookForm";

describe("testing form functionality", () => {
  //here is my first test
  test("if form title value is changed", () => {
    const component = render(<BookForm />);
    const form = component.container.querySelector("form");
    //const titleNode = screen.getByPlaceholderText("Enter title");
    const titleNode = screen.getByLabelText("title");
    //const inputNode = screen.getByPlaceholderText("Enter title");

    fireEvent.change(titleNode, {
      target: { value: "testing of forms could be easier" },
    });

    expect(titleNode.value).toMatch("testing of forms could be easier");
  });

  test("if form description value is changed", async () => {
    const component = render(<BookForm />);
    const descriptionNode = screen.getByPlaceholderText("description");

    await act(async () => {
      fireEvent.change(descriptionNode, {
        target: { value: "little women cookies" },
      });
    });
    expect(descriptionNode.value).toMatch("little women cookies");
  });

  test("if form isbn value is changed", () => {
    const { getByPlaceholderText } = render(<BookForm />);
    const isbnNode = screen.getByPlaceholderText("Enter isbn");
    fireEvent.change(isbnNode, {
      target: { value: "12312421412421" },
    });
    expect(isbnNode.value).toMatch("12312421412421");
  });

  test("if Submit is clicked and HandleSubmit is launched", async () => {
    const mockHandleSubmit = jest
      .fn()
      .mockImplementation((cb) => () => cb({ test: "test" }));

    const component = render(<BookForm submit={mockHandleSubmit} />);
    const form = component.container.querySelector("form");
    const titleNode = screen.getByLabelText("title");

    fireEvent.change(titleNode, {
      target: { value: "testing of forms could be easier" },
    });

    await act(async () => {
      fireEvent.submit(form);
    });

    expect(mockHandleSubmit.mock.calls).toHaveLength(1);
  });

  test("if all values are entered and form submitted", async () => {
    const mockNotify = jest.fn();

    const component = render(<BookForm submit={mockNotify} />);
    const form = component.container.querySelector("form");

    const titleNode = screen.getByLabelText("title");
    const descriptionNode = screen.getByPlaceholderText("description");
    const isbnNode = screen.getByPlaceholderText("Enter isbn");

    fireEvent.change(titleNode, {
      target: { value: "Little Women" },
    });
    fireEvent.change(isbnNode, {
      target: { value: "123124125" },
    });
    fireEvent.change(descriptionNode, {
      target: { value: "Little Women strolling round" },
    });

    await act(async () => {
      fireEvent.submit(form);
    });

    expect(mockNotify.mock.calls).toHaveLength(1);

    expect(isbnNode.value).toMatch("123124125");
    expect(titleNode.value).toMatch("Little Women");
    expect(descriptionNode.value).toMatch("Little Women strolling round");
  });
});
afterEach(cleanup);
