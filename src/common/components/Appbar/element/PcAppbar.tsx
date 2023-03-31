import { css } from "@emotion/react";
import { Logo, MenuIcon } from "./components";

export const PcAppbar = () => {
  return (
    <div css={st.root}>
      <Logo />
      <MenuIcon />
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 10;
    padding: 0 5.2vw;
  `,
};
