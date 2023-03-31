import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <footer css={st.footer}>
      <Typography css={st.company}>{"COREDAX"}</Typography>
      <div css={st.inner}>
        <Typography className="info" css={st.info}>
          {"(주)코어닥스 대표이사 임요송"}
        </Typography>
        <div css={st.border}></div>
        <Typography className="info" css={st.info}>
          {"서울특별시 구로구 디지털242 한화비즈메트로1차(구로동) 1307호"}
        </Typography>
        <div css={st.border}></div>
        <Typography className="info" css={st.info}>
          {"사업자등록번호 894-86-01183"}
        </Typography>
        <div css={st.border}></div>
        <Typography className="info" css={st.info}>
          {"daxfriends@coredax.com"}
        </Typography>
      </div>
      <Typography css={st.info}>
        {"Copyright © 2018 COREDAX Co., Ltd. All rights reserved."}
      </Typography>
    </footer>
  );
};

const st = {
  footer: css`
    width: 100%;
    padding: 2.08vw;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media ${MediaQueries.lg} {
      padding: 4.2vw;
    }
    @media ${MediaQueries.xs} {
      padding: 5.55vw;
    }
  `,
  inner: css`
    display: flex;
    align-items: center;

    @media ${MediaQueries.lg} {
      flex-direction: column;
      align-items: unset;
    }
  `,
  border: css`
    font-family: "Pretendard";
    font-weight: 400;
    padding: 0 2px;

    &::after {
      content: "|";

      @media ${MediaQueries.lg} {
        content: none;
      }
    }
  `,
  company: css`
    font-size: 2.08vw;
    font-family: "Pretendard";
    font-weight: 500;
    @media ${MediaQueries.lg} {
      font-size: 5.2vw;
    }
    @media ${MediaQueries.xs} {
      font-size: 5.55vw;
    }
  `,
  info: css`
    font-size: 0.73vw;
    font-family: "Pretendard";
    font-weight: 400;
    line-height: 1;
    @media ${MediaQueries.lg} {
      font-size: 1.82vw;
      line-height: 1.4;
    }
    @media ${MediaQueries.xs} {
      font-size: 3.33vw;
    }
  `,
};
