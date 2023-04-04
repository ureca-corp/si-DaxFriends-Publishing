import { useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";

import {
  MobileRoadmapItems,
  PcRoadmapItems,
  TabletRoadmapItems,
} from "./element";

export const RoadmapContainer = () => {
  const { isSmall, isTablet } = useCustomMediaQuery();
  return (
    <div css={st.root}>
      {isSmall ? (
        <MobileRoadmapItems />
      ) : isTablet ? (
        <TabletRoadmapItems />
      ) : (
        <PcRoadmapItems />
      )}
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
  `,
};
