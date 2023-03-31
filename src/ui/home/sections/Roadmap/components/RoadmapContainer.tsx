import { useCustomMediaQuery } from "@/common/theme/screen";
import React from "react";
import { MobileRoadmapItems, PcRoadmapItems } from "./element";

export const RoadmapContainer = () => {
  const { isExtraSmall } = useCustomMediaQuery();
  return (
    <React.Fragment>
      {isExtraSmall ? <MobileRoadmapItems /> : <PcRoadmapItems />}
    </React.Fragment>
  );
};
