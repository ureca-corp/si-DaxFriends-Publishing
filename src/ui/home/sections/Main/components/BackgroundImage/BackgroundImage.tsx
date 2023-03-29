import { css } from "@emotion/react";
import ImgPcBackground from "@/assets/pc/img-bg.png";
import ImgTabletBackground from "@/assets/tablet/img-bg.png";
import ImgMobileBackground from "@/assets/mb/img-bg.png";
import Image from "next/image";
import { useCustomMediaQuery } from "@/common/theme/screen";

export const BackgroundImage = () => {
  const { isTablet, isSmall } = useCustomMediaQuery();
  return (
    <div css={st.bg}>
      <Image
        fill
        src={
          isSmall
            ? ImgMobileBackground
            : isTablet
            ? ImgTabletBackground
            : ImgPcBackground
        }
        alt="bg"
      />
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
