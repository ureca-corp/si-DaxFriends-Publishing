import { css } from "@emotion/react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { LightColor } from "@/common/theme/color";
import { FaqModels } from "../models/faq.models";
import { MediaQueries, useCustomMediaQuery } from "@/common/theme/screen";

export const AccordionContainer = () => {
  const [expanded, setExpanded] = useState<number | false>(1);
  const { isTablet, isExtraSmall } = useCustomMediaQuery();

  const handleChange =
    (panelIndex: number) =>
    (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panelIndex : false);
    };

  const models = FaqModels;

  return (
    <div css={st.root}>
      {models.map((it, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography variant="subtitle1" css={st.question}>
              <span css={st.purpleText}>Q.</span> {it.question}
            </Typography>
          </AccordionSummary>
          <AccordionDivider />
          <AccordionDetails>
            <Typography
              css={st.answer}
              variant="subtitle2"
              color={LightColor.Gray300}
            >
              <span css={st.blueText}>A.</span> {it.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

const st = {
  root: css`
    width: 100%;
  `,
  dividerWrapper: css`
    width: 100%;
    padding: 0 1.04vw;
    height: 1px;
    text-align: center;
    @media ${MediaQueries.xs} {
      padding: 0 4.44vw;
    }
  `,
  divider: css`
    width: 100%;
    height: 100%;
    background-color: ${LightColor.Gray200};
    margin: 0 auto;
  `,
  purpleText: css`
    color: ${LightColor.BrandPrimary};
  `,
  blueText: css`
    color: ${LightColor.BrandBlue};
  `,
  question: css`
    @media ${MediaQueries.lg} {
      font-size: 2.86vw;
    }
    @media ${MediaQueries.xs} {
      font-size: 3.8vw;
    }
  `,
  answer: css`
    text-indent: -22px;
    margin-left: 16px;
    @media ${MediaQueries.lg} {
      font-size: 2.6vw;
    }
    @media ${MediaQueries.xs} {
      font-size: 3.4vw;
      text-indent: -4vw;
      margin-left: 10px;
    }
  `,
};

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.05)",
  "& .MuiButtonBase-root": {
    height: "6.66vh",
    [theme.breakpoints.down("xs")]: {
      height: "14.44vw",
    },
  },
  marginBottom: "1.85vh",
  borderRadius: "36px",
  [theme.breakpoints.down("xs")]: {
    marginBottom: "0vh !important",
    borderRadius: "0px",
  },
  "&:not(:last-child)": {
    borderBottom: "1px solid #CED5E1",
  },

  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem", fill: "black" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "36px",
  flexDirection: "row",

  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  [theme.breakpoints.down("xs")]: {
    "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
      fontSize: "medium",
    },
  },
  [theme.breakpoints.down("xs")]: {
    borderRadius: "0px",
    "& .MuiAccordionSummary-expandIconWrapper .MuiSvgIcon-root": {
      fontSize: "small",
    },
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: "16px",
  paddingLeft: "22px",
  [theme.breakpoints.down("lg")]: {
    padding: "2.6vw",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "4.44vw",
    paddingLeft: "5.55vw",
  },
}));

const AccordionDivider = () => {
  return (
    <div css={st.dividerWrapper}>
      <div css={st.divider}></div>
    </div>
  );
};
