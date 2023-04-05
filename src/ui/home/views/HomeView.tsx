import { Appbar } from "@/common/components/Appbar";
import { useFullpage } from "@/common/hooks/useFullPage";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { sectionIds } from "../common/SectionIds";
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

export const HomeView = () => {
  const { isSmall } = useCustomMediaQuery();
  const { fullpageRef } = useFullpage(sectionIds, isSmall);
  return (
    <div ref={fullpageRef} css={st.root}>
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
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    position: relative;
    overflow-x: hidden;
  `,
};
