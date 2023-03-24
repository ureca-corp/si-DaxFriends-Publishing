import { findTheme, ThemeTypes } from "@/common/theme/custom-theme";
import "@/fonts/font.style.css";
import "@/common/theme/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
