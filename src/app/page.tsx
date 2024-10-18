import React from "react";
import PromptLayout from "./components/PromptLayout/PromptLayout";
import { Typography } from "@mui/material";

import {
  _PROMPT_DEFAULT_SUGGESTION,
  _PROMPT_WITH_CITY_PERSONAL_PREFERENCES,
} from "./constants";

const promptValues = {
  defaultValue: _PROMPT_DEFAULT_SUGGESTION,
  valueWhenSwitchClicked: _PROMPT_WITH_CITY_PERSONAL_PREFERENCES,
};

export default function Home() {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Discover Your Ideal City as a Digital Nomad with Nomadify
      </Typography>
      <PromptLayout promptValues={promptValues} />
    </div>
  );
}
