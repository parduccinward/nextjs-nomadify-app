import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PromptLayout from "./PromptLayout";
import "@testing-library/jest-dom";

describe("PromptLayout Component", () => {
  it("should update text input when user types in", () => {
    const promptValues = {
      defaultValue: "This prompt should be filled with the following structure",
      valueWhenSwitchClicked: "Switched prompt structure",
    };

    const { getByPlaceholderText } = render(
      <PromptLayout promptValues={promptValues} />
    );

    const inputField = getByPlaceholderText(promptValues.defaultValue);
    expect(inputField).toBeInTheDocument();

    fireEvent.change(inputField, { target: { value: "My new prompt" } });
    expect(inputField).toHaveValue("My new prompt");
  });

  it("should switch placeholders when switch button is clicked", () => {
    const promptValues = {
      defaultValue: "Before switch clicked",
      valueWhenSwitchClicked: "After switch clicked",
    };

    const { getByPlaceholderText, getByRole } = render(
      <PromptLayout promptValues={promptValues} />
    );

    let inputField = getByPlaceholderText(promptValues.defaultValue);
    expect(inputField).toBeInTheDocument();

    const switchToggle = getByRole("checkbox");
    fireEvent.click(switchToggle);

    inputField = getByPlaceholderText(promptValues.valueWhenSwitchClicked!);
    expect(inputField).toBeInTheDocument();
  });

  it("should not render switch if 'valueWhenSwitchClicked' is not provided", () => {
    const promptValues = {
      defaultValue: "Before switch clicked",
      valueWhenSwitchClicked: null,
    };

    const { queryByLabelText, getByPlaceholderText } = render(
      <PromptLayout promptValues={promptValues} />
    );

    let inputField = getByPlaceholderText(promptValues.defaultValue);
    expect(inputField).toBeInTheDocument();

    const switchToggle = queryByLabelText("Switch");
    expect(switchToggle).not.toBeInTheDocument();
  });
});
