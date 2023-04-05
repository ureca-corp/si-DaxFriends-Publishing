import { LightColor } from "@/common/theme/color";
import { css } from "@emotion/react";
import Image from "next/image";
import ImgPinkBlur from "@/assets/pc/utility/img-blur.png";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { MovingIcon } from "@/common/components/MovingIcon";
import { Letter } from "./components";
import { MediaQueries } from "@/common/theme/screen";
import { sectionIds } from "../../common/SectionIds";

export const Utility = () => {
  const movingIcon = UseGetAsset("utility");

  return (
    <section id={sectionIds[3]} css={st.root}>
      <MovingIcon props={movingIcon} topShort />
      <Letter />
      <div css={st.blurWrapper}>
        <div css={st.blur}>
          <Image fill src={ImgPinkBlur} alt="blur" />
        </div>
      </div>
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    background-color: ${LightColor.LightPink};
    position: relative;
    overflow: hidden;
    z-index: 1;

    @media ${MediaQueries.lg} {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 7.5vw;
      padding-top: 19vw;
      gap: 8vw;
    }

    @media ${MediaQueries.sm} {
      display: unset;
      flex-direction: unset;
      align-items: unset;
      padding: 0 8.33vw;
    }
  `,
  blurWrapper: css`
    position: absolute;
    bottom: -25vw;
    right: -35vw;
  `,
  blur: css`
    position: relative;
    width: 85vw;
    aspect-ratio: 1;
  `,
};
