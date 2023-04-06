import { Appbar } from "@/common/components/Appbar";
import { css } from "@emotion/react";

import {
  Gallery,
  Utility,
  Partners,
  Team,
  Faq,
  Footer,
  Main,
  Story,
  Roadmap,
} from "../sections";
import { Stack } from "@mui/material";

export const HomeView = () => {
  return (
    <Stack css={st.root}>
      <Appbar />
      <Main />
      <Story />
      <Roadmap />
      <Utility />
      <Gallery />
      <Team />
      <Partners />
      <Faq />
      <Footer />
    </Stack>
  );
};

const st = {
  root: css`
    width: 100%;
    position: relative;
  `,
};
