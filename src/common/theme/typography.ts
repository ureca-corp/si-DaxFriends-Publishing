import { TypographyOptions } from "@mui/material/styles/createTypography";
import { LightColor } from "./color";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Pretendard",
  allVariants: {
    color: LightColor.TextColor1,
    whiteSpace: "pre-wrap",
  },
  body1: {
    fontWeight: "300",
  },
  body2: {
    fontWeight: "300",
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
