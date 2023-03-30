import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { lightPalette } from "./color";
import { ScreenType } from "./screen";
import { typographyOptions } from "./typography";

export const lightTheme = createTheme({
  palette: lightPalette,
  typography: typographyOptions,
  breakpoints: {
    values: {
      xs: ScreenType.xs + 1,
      sm: ScreenType.sm + 1,
      md: ScreenType.md + 1,
      lg: ScreenType.lg + 1,
      xl: ScreenType.xl + 1,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: "transparent",
        elevation: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        sizeLarge: {
          padding: "12px",
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiAccordion: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
});

export enum ThemeTypes {
  Light,
  Dark,
}

export const useThemeHook = () => {
  const [theme, setTheme] = useState(lightTheme);
  const palette = theme.palette;

  const colorMode = useMemo(
    () => (theme: ThemeTypes) => setTheme(lightTheme),
    []
  );

  return {
    theme,
    palette,
    colorMode,
  };
};
