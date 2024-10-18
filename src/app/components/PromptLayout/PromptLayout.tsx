"use client";
import React, { useState } from "react";
import TextInput from "../TextInput/TextInput";
import { Switch, Box } from "@mui/material";

interface PromptValues {
  defaultValue: string;
  valueWhenSwitchClicked?: string | null;
}

interface PromptLayoutProps {
  promptValues: PromptValues;
}

const PromptLayout: React.FC<PromptLayoutProps> = ({ promptValues }) => {
  const [inputValue, setInputValue] = useState(promptValues.defaultValue);
  const [isSwitchChecked, setIsSwitchChecked] = useState(false);

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleSwitchChange = () => {
    setIsSwitchChecked((prev) => !prev);
  };

  const currentPlaceholder = isSwitchChecked
    ? promptValues.valueWhenSwitchClicked ?? promptValues.defaultValue
    : promptValues.defaultValue;

  return (
    <Box display="flex" alignItems="center">
      <TextInput
        initialValue={inputValue}
        placeholder={currentPlaceholder}
        onChange={handleInputChange}
      />
      {promptValues.valueWhenSwitchClicked !== null &&
        promptValues.valueWhenSwitchClicked !== undefined && (
          <Switch
            checked={isSwitchChecked}
            onChange={handleSwitchChange}
            color="primary"
          />
        )}
    </Box>
  );
};

export default PromptLayout;
