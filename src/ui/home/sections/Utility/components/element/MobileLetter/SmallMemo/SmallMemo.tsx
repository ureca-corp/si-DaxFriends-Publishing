import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Image from "next/image";
import ImgMemo from "@/assets/mb/utility/img-memo.png";
import { MemoType } from "../../../../models/utility.models";

interface MemoProps {
  onMemoOpen: () => void;
  memoState: MemoType | null;
}

export const SmallMemo = ({ onMemoOpen, memoState }: MemoProps) => {
  return (
    <div css={st.memo} onClick={onMemoOpen}>
      <Image fill src={ImgMemo} alt="letter" />
      <div css={st.memoText}>
        <Typography color="white" css={st.title}>
          {memoState?.title}
        </Typography>
        <ul>
          {memoState?.desc.map((it, _) => (
            <li key={_}>
              <Typography color="white" css={st.desc}>
                {it}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const st = {
  memo: css`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 4;
    cursor: pointer;
  `,
  memoText: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5.55vw;
    position: relative;
    z-index: 5;
    padding: 10px;
    padding-top: 11vw;
  `,
  title: css`
    font-size: 7vw;
    line-height: 1;
    text-indent: -20px;
    margin-left: 30px;
  `,
  desc: css`
    font-size: 5vw;
    line-height: 1.4;
    text-indent: -20px;
    margin-left: 30px;
  `,
};
