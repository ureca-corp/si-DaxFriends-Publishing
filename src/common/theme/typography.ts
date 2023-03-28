import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "BMJUA",
  allVariants: {
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
