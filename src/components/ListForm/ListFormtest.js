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
import ListForm from "./ListForm";
import { AuthProvider, AuthContext } from "../../AuthContext";

describe("testing form functionality", () => {
  test("it should let me access Context", () => {
    const currentUser = "Rabie Abbas";
    const mockNotify = jest.fn();
    const mockLogin = jest.fn();

    const { getByText } = render(
      <AuthContext.Provider value={{ currentUser, mockLogin }}>
        <ListForm submit={mockNotify} />
      </AuthContext.Provider>
    );

    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    expect(mockNotify.mock.calls).toHaveLength(1);
    //expect(contextCallback.mock.calls[0][0]).toEqual({
    //  user: "John Doe"
    //
  });

  test("if list name value can be changed", () => {
    /* const contextUser = { currentUser: ' '};

    jest.spyOn(AuthContext, 'useAuth').mockImplementation(() => contextUser)
 */

    const component = render(<ListForm />);

    const nameNode = screen.getByTestId("listnameid");
    fireEvent.change(nameNode, {
      target: { value: "Jest books" },
    });
    expect(nameNode.value).toMatch("Jest books");
  });

  test("if list description value is changed", async () => {
    const component = render(<ListForm />);
    const descriptionNode = screen.getByPlaceholderText("description");
    await act(async () => {
      fireEvent.change(descriptionNode, {
        target: { value: "Books for testing React Apps" },
      });
    });
    expect(descriptionNode.value).toMatch("Books for testing React Apps");
  });

  test("if all values are entered and form submitted", async () => {
    const mockNotify = jest.fn();

    //receive user Id

    const component = render(<ListForm submit={mockNotify} />);
    const form = component.container.querySelector("form");

    const titleNode = screen.getByTestId("listnameid");
    const descriptionNode = screen.getByPlaceholderText("description");

    fireEvent.change(titleNode, {
      target: { value: "Jest Books" },
    });

    fireEvent.change(descriptionNode, {
      target: { value: "Books for testing React Apps" },
    });

    await act(async () => {
      fireEvent.submit(form);
    });

    expect(mockNotify.mock.calls).toHaveLength(1);

    expect(titleNode.value).toMatch("Jest Books");
    expect(descriptionNode.value).toMatch("Books for testing React Apps");
  });
});

afterEach(cleanup);
