import { LightColor } from "@/common/theme/color";
import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { RoadmapItemType } from "../../../../models/roadmap.type";

export const RoadmapBox = ({ title, descList }: RoadmapItemType) => {
  return (
    <div css={st.box}>
      <Typography css={st.title} color={LightColor.LightBlack}>
        {title}
      </Typography>
      <ul css={st.ul}>
        {descList.map((it, index) => (
          <li key={index}>
            <Typography
              variant="body2"
              css={st.desc}
              color={LightColor.LightBlack}
            >
              {it}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

const st = {
  box: css`
    width: 51.85vh;
    height: 32.5vh;
    max-height: 32.5vh;
    background-color: white;
    padding: 3.7vh;
    border: 3px solid #121212;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${MediaQueries.xll} {
      width: 65%;
      height: 28.5vh;
      border-radius: 4.81vw;
      padding: 3.2vh;
      margin: 0 auto;
    }

    @media ${MediaQueries.lg} {
      width: 100%;
      height: 27.7vh;
      border-radius: 7.81vw;
      padding: 3.2vh;
    }

    @media ${MediaQueries.sm} {
      width: 77.22vw;
      height: 247px;
      border-radius: 11.11vw;
      padding: 7.77vw;
      margin: 0 auto;
    }
    @media (max-width: 414px) and (max-height: 896px) {
      width: 77.22vw;
      height: 247px;
      padding: 7.77vw;
    }
    @media (max-width: 414px) and (max-height: 736px) {
      width: 77.22vw;
      height: 247px;
      padding: 7.77vw;
    }

    @media (max-width: 375px) and (max-height: 812px) {
      width: 77.22vw;
      height: 210px;
      padding: 6vw;
    }

    @media (max-width: 375px) and (max-height: 667px) {
      width: 77.22vw;
      height: 210px;
      padding: 6vw;
    }
  `,

  ul: css`
    list-style-type: disc;
    padding-left: 3.7vh;
    @media ${MediaQueries.lg} {
      padding-left: 2.7vh;
    }
    @media ${MediaQueries.sm} {
      padding-left: 3vh;
    }
  `,

  title: css`
    font-size: 2.08vw;
    font-weight: 400;
    @media ${MediaQueries.lg} {
      font-size: 4.42vw;
    }
    @media ${MediaQueries.sm} {
      font-size: 7.22vw;
    }
  `,
  desc: css`
    font-weight: 400;
    @media ${MediaQueries.lg} {
      font-size: 2.86vw;
    }
    @media ${MediaQueries.sm} {
      font-size: 4.44vw;
    }
  `,
};
