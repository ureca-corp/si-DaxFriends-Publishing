import { css } from "@emotion/react";
import Image from "next/image";
import ImgBackground from "@/assets/pc/img-bg.png";
import { Typography } from "@mui/material";

export const Main = () => {
  const title = {
    main: "DAX Friends",
    desc: "디지털자산거래소 코어닥스의\n대표 캐릭터 IP인 '깜소'를 중심으로 한\n이더리움 기반 PFP NFT 프로젝트입니다.",
  };
  return (
    <section css={st.root}>
      <div css={st.title}>
        <Typography css={st.main} fontSize="46px" lineHeight={1.4}>
          {title.main}
        </Typography>
        <Typography
          css={st.desc}
          fontSize="34px"
          lineHeight={1.4}
          color="white"
        >
          {title.desc}
        </Typography>
      </div>
      <div css={st.bg}>
        <Image fill src={ImgBackground} alt="bg" />
      </div>
    </section>
  );
};

const st = {
  root: css`
    width: 100%;
    height: 100vh;
    position: relative;
  `,
  bg: css`
    position: relative;
    width: 100%;
    height: 100%;
  `,
  title: css`
    position: absolute;
    text-align: center;
    top: 12.3vw;
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
    margin-bottom: 1.04vw; //20px
  `,
  desc: css`
    text-shadow: 0px 0px 10px #e2b0f8;
    font-family: "BMJUA";
  `,
};
