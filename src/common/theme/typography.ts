import { TypographyOptions } from "@mui/material/styles/createTypography";

const baseTypographyOptions: TypographyOptions = {
  fontFamily: "BMJUA",
  allVariants: {
    whiteSpace: "pre-wrap",
  },
  h1: {
    fontSize: "2.91vw",
    lineHeight: 1.4,
  },
  h2: {
    fontSize: "4.25vh",
    lineHeight: 1.4,
  },
  h3: {
    fontSize: "40px",
    lineHeight: 1.4,
  },
  h4: {
    fontSize: "3.14vh",
    lineHeight: 1.4,
  },

  body1: {
    fontSize: "30px",
    lineHeight: 1.4,
  },
  body2: {
    fontSize: "1.35vw",
    lineHeight: 1.4,
  },
  subtitle1: {
    fontSize: "22px",
    lineHeight: 1.4,
  },
  subtitle2: {
    fontSize: "20px",
    lineHeight: 1.4,
  },
  caption: {
    fontSize: "14px",
    lineHeight: 1.4,
  },
};
export const typographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
};
