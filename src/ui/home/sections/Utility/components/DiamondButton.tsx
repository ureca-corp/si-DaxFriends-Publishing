import { css } from "@emotion/react";

interface Props {
  onClick: () => void;
}
export const DiamondButton = ({ onClick }: Props) => {
  return (
    <div css={st.root}>
      <div css={st.diamond} onClick={onClick}></div>
    </div>
  );
};

const st = {
  root: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  diamond: css`
    position: relative;
    width: 0;
    height: 0;
    border: 23.43vw solid transparent;
    border-bottom-color: transparent;
    top: -23.43vw;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      left: -23.43vw;
      top: 23.43vw;
      width: 0;
      height: 0;
      border: 23.43vw solid transparent;
      border-top-color: transparent;
    }
  `,
};
