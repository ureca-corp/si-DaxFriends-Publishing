import { css } from "@emotion/react";
import Image from "next/image";
import ImgBlackCow from "@/assets/tablet/img-black-cow.png";

export const TabletBackgroundImage = () => {
  return (
    <div css={st.imageWrapper}>
      <div css={st.image}>
        <Image fill src={ImgBlackCow} alt="bg-character" />
      </div>
    </div>
  );
};

const st = {
  imageWrapper: css`
    position: absolute;
    left: 0;
    bottom: 0px;
  `,
  image: css`
    position: relative;
    width: 52.08vw;
    aspect-ratio: 1;
  `,
};
