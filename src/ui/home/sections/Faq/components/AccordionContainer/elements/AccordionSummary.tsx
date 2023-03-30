import { styled } from "@mui/material";

import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

export const AccordionSummary = styled((props: AccordionSummaryProps) => (
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
