import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import Image from "next/image";
import ImgLock from "@/assets/pc/utility/img-lock.png";

interface LockProps {
  isVisible?: boolean;
}

export const Lock = ({ isVisible = true }: LockProps) => {
  return (
    <div css={st.lockWrapper(isVisible)}>
      <div css={st.lock}>
        <Image fill src={ImgLock} alt="letter" />
      </div>
    </div>
  );
};

const st = {
  lockWrapper: (isVisible: boolean) => css`
    display: ${isVisible ? "block" : "none"};
    position: absolute;
    bottom: 30%;
    right: 29.44%;
    z-index: 2;
  `,
  lock: css`
    position: relative;
    width: 4.68vw;
    aspect-ratio: 1/1.35;
    cursor: pointer;

    @media ${MediaQueries.lg} {
      width: 7.81vw;
    }

    &:hover {
      animation: shake 0.5s;
    }

    @keyframes shake {
      0% {
        transform: translate(1px, 1px) rotate(0deg);
      }
      10% {
        transform: translate(-1px, -2px) rotate(-1deg);
      }
      20% {
        transform: translate(-3px, 0px) rotate(1deg);
      }
      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }
      50% {
        transform: translate(-1px, 2px) rotate(-1deg);
      }
      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(3px, 1px) rotate(-1deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(1deg);
      }
      90% {
        transform: translate(1px, 2px) rotate(0deg);
      }
      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }
  `,
};
