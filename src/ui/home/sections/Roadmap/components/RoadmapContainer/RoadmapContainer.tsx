import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";
import { SlideProps } from "@/ui/home/common/type/slide.type";
import { css } from "@emotion/react";

import {
  MobileRoadmapItems,
  PcRoadmapItems,
  TabletRoadmapItems,
} from "./element";

export const RoadmapContainer = ({ fullpageSwiper }: SlideProps) => {
  const { isSmall, isTablet } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      {isSmall ? (
        <MobileRoadmapItems />
      ) : isTablet ? (
        <TabletRoadmapItems fullpageSwiper={fullpageSwiper} />
      ) : (
        <PcRoadmapItems fullpageSwiper={fullpageSwiper} />
      )}
    </div>
  );
};

const st = {
  root: css`
    width: 100%;

    @media ${MediaQueries.lg} {
      overflow-y: scroll;
      ::-webkit-scrollbar {
        display: none;
      }
    }
    @media ${MediaQueries.sm} {
      position: relative;
      overflow-y: unset;
      height: 70vh;
      display: flex;
      align-content: center;
      justify-content: center;
      padding-bottom: 17.77vh;
    }
  `,
};
