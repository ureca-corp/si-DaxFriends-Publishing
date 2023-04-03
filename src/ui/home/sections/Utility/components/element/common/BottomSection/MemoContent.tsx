import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";
import { MemoType } from "../../../../models/utility.models";

interface MemoContentProps {
  props: MemoType | null;
}

export const MemoContent = ({ props }: MemoContentProps) => {
  return (
    <React.Fragment>
      <Typography color="white" css={st.title}>
        {props?.title}
      </Typography>
      <ul>
        {props?.desc.map((it, index) => (
          <li key={index}>
            <Typography color="white" css={st.desc}>
              {it}
            </Typography>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

const st = {
  title: css`
    font-size: 1.77vw;
    line-height: 1;
    text-indent: -26px;
    margin-left: 20px;
    @media ${MediaQueries.lg} {
      text-indent: -21px;
      margin-left: 20px;
      font-size: 3.64vw;
    }
  `,
  desc: css`
    font-size: 1.56vw;
    line-height: 1.4;
    text-indent: -26px;
    margin-left: 20px;
    @media ${MediaQueries.lg} {
      text-indent: -21px;
      margin-left: 20px;
      font-size: 2.6vw;
    }
  `,
};
