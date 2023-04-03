import { useState } from "react";
import { UtilityModels } from "../../../models/utility.models";

export const UseMobileLetter = () => {
  const models = UtilityModels;
  const [letterOpen, setLetterOpen] = useState(0);
  const handleLetterClose = () => {
    setLetterOpen(0);
  };

  const handleLetterOpen = (index: number) => {
    return () => setLetterOpen(index);
  };

  const letterText = letterOpen === 0 ? null : models[letterOpen - 1];
  return {
    letterState: {
      index: letterOpen,
      onIndexOpen: handleLetterOpen,
      onClose: handleLetterClose,
    },
    textState: letterText,
  };
};
