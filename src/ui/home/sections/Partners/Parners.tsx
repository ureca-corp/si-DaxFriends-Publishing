import { css } from "@emotion/react";
import Image from "next/image";
import ImgBlue from "@/assets/pc/partners/img-blur-blue.png";
import { LightColor } from "@/common/theme/color";
import { SwiperSection } from "./components/SwiperSection";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { MovingIcon } from "@/common/components/MovingIcon";
import { MediaQueries } from "@/common/theme/screen";

export const Partners = () => {
  const movingIcon = UseGetAsset("partners");
  return (
    <section css={st.root}>
      <MovingIcon props={movingIcon} />
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
      padding-top: 19vw;
      gap: 14vw;
    }

    @media ${MediaQueries.sm} {
      padding-top: 18vw;
      gap: 20.5vw;
    }
  `,
  blur: css`
    position: relative;
    width: 85vw;
    aspect-ratio: 1;
  `,
  blueBlur: css`
    position: absolute;
    right: -28vw;
    bottom: -28vw;
  `,
};
