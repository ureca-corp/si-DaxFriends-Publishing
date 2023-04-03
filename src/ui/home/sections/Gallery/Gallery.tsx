import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import Image from "next/image";
import ImgPink from "@/assets/pc/gallery/img-blur-pink.png";
import ImgBlue from "@/assets/pc/gallery/img-blur-blue.png";
import { SwiperSection } from "./components/SwiperSection";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { MovingIcon } from "@/common/components/MovingIcon";
import { MediaQueries } from "@/common/theme/screen";

export const Gallery = () => {
  const movingIcon = UseGetAsset("gallery");
  return (
    <section css={st.root}>
      <MovingIcon props={movingIcon} />
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
      <SwiperSection />
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

    @media ${MediaQueries.lg} {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 23.4vw;
      gap: 5.2vw;
    }

    @media ${MediaQueries.sm} {
      padding-top: 25vw;
      gap: 20.5vw;
    }
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
