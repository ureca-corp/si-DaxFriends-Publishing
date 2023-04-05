import { LightColor } from "@/common/theme/color";
import { MediaQueries } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { RoadmapItemType } from "../../../../models/roadmap.type";

export const RoadmapBox = ({ title, descList }: RoadmapItemType) => {
  return (
    <div css={st.box}>
      <Typography variant="h3" css={st.title} color={LightColor.LightBlack}>
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
    width: 100%;
    background-color: white;
    padding: 3.7vh;
    border: 3px solid #121212;
    border-radius: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media ${MediaQueries.lg} {
      width: 51.08vw;
      border-radius: 7.81vw;
      padding: 5.2vw;
    }

    @media ${MediaQueries.sm} {
      width: 77.22vw;
      aspect-ratio: 1/0.8;
      border-radius: 11.11vw;
      padding: 7.77vw;
      margin: 0 auto;
    }
  `,

  ul: css`
    list-style-type: disc;
    padding-left: 3.7vh;
    @media ${MediaQueries.sm} {
      padding-left: 3vh;
    }
  `,

  title: css`
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
