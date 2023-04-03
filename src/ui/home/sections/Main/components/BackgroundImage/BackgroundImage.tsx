import { css } from "@emotion/react";
import { useCustomMediaQuery } from "@/common/theme/screen";
import {
  MobileBackgroundImage,
  PcBackgroundImage,
  TabletBackgroundImage,
} from "./element";

export const BackgroundImage = () => {
  const { isTablet, isSmall } = useCustomMediaQuery();
  return (
    <div css={st.bg}>
      {isSmall ? (
        <MobileBackgroundImage />
      ) : isTablet ? (
        <TabletBackgroundImage />
      ) : (
        <PcBackgroundImage />
      )}
    </div>
  );
};

const st = {
  bg: css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
};
