import { useCustomMediaQuery } from "@/common/theme/screen";
import React from "react";
import {
  MobileRoadmapItems,
  PcRoadmapItems,
  TabletRoadmapItems,
} from "./element";

export const RoadmapContainer = () => {
  const { isSmall, isTablet } = useCustomMediaQuery();
  return (
    <React.Fragment>
      {isSmall ? (
        <MobileRoadmapItems />
      ) : isTablet ? (
        <TabletRoadmapItems />
      ) : (
        <PcRoadmapItems />
      )}
    </React.Fragment>
  );
};
