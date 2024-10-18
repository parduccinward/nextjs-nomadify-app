import React from "react";
import { render } from "@testing-library/react";
import Home from "./page";
import "@testing-library/jest-dom";

import { _PROMPT_DEFAULT_SUGGESTION } from "./constants";

describe("Home Component", () => {
  it("should render the PromptLayout with the correct initial prompt", () => {
    const { getByPlaceholderText } = render(<Home />);

    const inputField = getByPlaceholderText(_PROMPT_DEFAULT_SUGGESTION);
    expect(inputField).toBeInTheDocument();
  });

  it("should render the correct initial title", () => {
    const { getByText } = render(<Home />);

    const title = getByText(
      "Discover Your Ideal City as a Digital Nomad with Nomadify"
    );
    expect(title).toBeInTheDocument();
  });
});
