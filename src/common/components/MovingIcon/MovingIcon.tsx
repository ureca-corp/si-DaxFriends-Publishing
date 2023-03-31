import { css } from "@emotion/react";
import Image from "next/image";
import { AssetType } from "./type/gif.type";

interface MovingIcon {
  props: AssetType;
  topShort?: boolean;
}

export const MovingIcon = ({ props, topShort = false }: MovingIcon) => {
  return (
    <div css={st.wrapper(topShort)}>
      <div css={st.gif(props.w, props.h)}>
        <Image fill src={props.asset} alt="gif" />
      </div>
    </div>
  );
};

const st = {
  wrapper: (topShort: boolean) => css`
    position: absolute;
    top: ${topShort ? "2.65vw" : "3.2vw"};
    left: 5.2vw;
    z-index: 3;
  `,
  gif: (width: string, aspectRatio: string) => css`
    position: relative;
    width: ${width};
    aspect-ratio: ${aspectRatio};
  `,
};
