import { useState } from "react";

export default function useInput(defaultValue) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [isFieldDirty, setIsFieldDirty] = useState(false);

  function handleChange(value) {
    setEnteredValue(value);
    setIsFieldDirty(false);
  }
  function handleBlur(value) {
    setIsFieldDirty(value);
  }

  return {
    enteredValue,
    isFieldDirty,
    handleBlur,
    handleChange,
  };
}
