import { css } from "@emotion/react";
import Image from "next/image";
import ImgPink from "@/assets/pc/team/img-blur-pink.png";
import ImgPurple from "@/assets/pc/team/img-blur-purple.png";
import { LightColor } from "@/common/theme/color";
import { UseGetAsset } from "@/common/components/MovingIcon/models/gif.models";
import { MovingIcon } from "@/common/components/MovingIcon";
import { MediaQueries } from "@/common/theme/screen";
import { MembersContainer } from "./components";
import { sectionIds } from "../../common/SectionIds";

export const Team = () => {
  const movingIcon = UseGetAsset("team");
  return (
    <section id={sectionIds[5]} css={st.root}>
      <MovingIcon props={movingIcon} />
      <div css={st.purpleBlur}>
        <div css={st.blur}>
          <Image fill src={ImgPurple} alt="blue" />
        </div>
      </div>
      <div css={st.pinkBlur}>
        <div css={st.blur}>
          <Image fill src={ImgPink} alt="pink" />
        </div>
      </div>
      <MembersContainer />
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
      display: block;
      padding-top: unset;
    }
  `,

  inner: css`
    width: 100%;
    height: 100%;
  `,
  purpleBlur: css`
    position: absolute;
    left: -30vw;
    bottom: -30vw;
  `,
  pinkBlur: css`
    position: absolute;
    right: -28vw;
    top: -18vw;
  `,
  blur: css`
    position: relative;
    width: 85vw;
    aspect-ratio: 1;
  `,
};
