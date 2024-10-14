import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TextInput from "./TextInput";

describe("TextInput", () => {
  it("should render with an initial value", () => {
    const { getByDisplayValue } = render(<TextInput initialValue="Test" />);
    expect(getByDisplayValue("Test")).toBeInTheDocument();
  });

  it("should display the placeholder text", () => {
    const { getByPlaceholderText } = render(
      <TextInput placeholder="Enter text here" />
    );
    expect(getByPlaceholderText("Enter text here")).toBeInTheDocument();
  });

  it("should update the value on change", () => {
    const onChangeMock = jest.fn();
    const { getByLabelText } = render(
      <TextInput initialValue="" onChange={onChangeMock} label="Custom Input" />
    );
    const input = getByLabelText("Custom Input");

    fireEvent.change(input, { target: { value: "World" } });

    expect(onChangeMock).toHaveBeenCalledWith("World");
  });

  it("should use the specified type", () => {
    const { getByLabelText } = render(
      <TextInput type="password" label="Password" />
    );
    const input = getByLabelText("Password");

    expect(input).toHaveAttribute("type", "password");
  });
});
