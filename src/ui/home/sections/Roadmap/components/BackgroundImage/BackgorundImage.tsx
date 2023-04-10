import { useCustomMediaQuery } from "@/common/theme/screen";
import React from "react";
import {
  MobileBackgroundImage,
  PcBackgroundImage,
  TabletBackgroundImage,
} from "./element";

export const BackgroundImage = () => {
  const { isSmall, isTablet, isLargeTablet } = useCustomMediaQuery();

  return (
    <React.Fragment>
      {isSmall ? (
        <MobileBackgroundImage />
      ) : isLargeTablet ? (
        <TabletBackgroundImage />
      ) : (
        <PcBackgroundImage />
      )}
    </React.Fragment>
  );
};
