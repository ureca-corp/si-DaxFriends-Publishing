import { css } from "@emotion/react";
import { ReactNode } from "react";
import { Stack } from "@mui/material";
import Head from "next/head";
import Script from "next/script";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack width="100%" height="100%">
      <Head>
        <title>{"DaxFriends"}</title>
      </Head>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/gsap.min.js"
        strategy="lazyOnload"
      />
      <Stack direction="row" width="100%" height="100%">
        <main css={st.main}>{children}</main>
      </Stack>
    </Stack>
  );
};

const st = {
  main: css`
    width: 100%;
    height: 100%;
  `,
};
