import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import Image from "next/image";
import ImgPink from "@/assets/pc/gallery/img-blur-pink.png";
import ImgBlue from "@/assets/pc/gallery/img-blur-blue.png";

export const Gallery = () => {
  return (
    <section css={st.root}>
      <div css={st.pinkBlur}>
        <div css={st.blur}>
          <Image fill src={ImgPink} alt="pink" />
        </div>
      </div>
      <div css={st.blueBlur}>
        <div css={st.blur}>
          <Image fill src={ImgBlue} alt="blue" />
        </div>
      </div>
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    background-color: ${LightColor.LightNavy};
    position: relative;
    overflow: hidden;
  `,

  pinkBlur: css`
    position: absolute;
    left: -28vw;
    top: -28vw;
  `,
  blueBlur: css`
    position: absolute;
    right: -23vw;
    bottom: -28vw;
  `,
  blur: css`
    position: relative;
    width: 85vw;
    aspect-ratio: 1;
  `,
};
