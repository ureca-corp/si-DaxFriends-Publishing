import { useCustomMediaQuery } from "@/common/theme/screen";
import React from "react";
import {
  MobileBackgroundImage,
  PcBackgroundImage,
  TabletBackgroundImage,
} from "./element";

export const BackgroundImage = () => {
  const { isSmall, isTablet } = useCustomMediaQuery();

  return (
    <React.Fragment>
      {isSmall ? (
        <MobileBackgroundImage />
      ) : isTablet ? (
        <TabletBackgroundImage />
      ) : (
        <PcBackgroundImage />
      )}
    </React.Fragment>
  );
};
