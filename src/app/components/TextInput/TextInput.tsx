import React from "react";
import TextField from "@mui/material/TextField";

interface CustomInputProps {
  initialValue?: string;
  placeholder?: string;
  type?: string;
  onChange?: (value: string) => void;
  label?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  initialValue = "",
  placeholder = "",
  type = "text",
  onChange,
  label,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <TextField
      value={initialValue}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      label={label}
    />
  );
};

export default CustomInput;
