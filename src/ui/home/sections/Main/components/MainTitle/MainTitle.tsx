import { css } from "@emotion/react";
import { Typography } from "@mui/material";

interface TitleProps {
  main: string;
  desc: string;
}

export const MainTitle = ({ main, desc }: TitleProps) => {
  return (
    <div css={st.title}>
      <Typography css={st.main}>{main}</Typography>
      <Typography css={st.desc} variant="h4" color="white">
        {desc}
      </Typography>
    </div>
  );
};

const st = {
  title: css`
    position: absolute;
    text-align: center;
    top: 24.72vh;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
  `,
  main: css`
    background: linear-gradient(
      90deg,
      #40c8ff 0%,
      #9770ff 50.52%,
      #e81cff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 4.25vh;
    line-height: 1.4;
    margin-bottom: 1.04vw; //20px
  `,
  desc: css`
    text-shadow: 0px 0px 10px #e2b0f8;
    font-family: "BMJUA";
  `,
};
