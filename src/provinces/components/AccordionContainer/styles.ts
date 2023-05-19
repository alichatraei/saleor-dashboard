import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { withStyles } from "@material-ui/core/styles";
const CustomAccordion = withStyles(
  {
    root: {
      dir: "rtl",
      border: "1px solid rgba(0, 0, 0, .125)",
      boxShadow: "none",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:hover": {
        cursor: "pointer",
      },
      "&:before": {
        display: "none",
      },
      "&$expanded": {
        margin: "auto",
        backgroundColor: "#ccc",
      },
      "&: expandIcon": {
        backgroundColor: "transparent !important",
      },
    },
    expanded: {},
  },
  { name: "AccordionContainer" },
)(MuiAccordion);

const CustomAccordionSummary = withStyles(
  {
    root: {
      backgroundColor: "rgba(0, 0, 0, .03)",
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
      marginBottom: -1,
      minHeight: 56,
      "&$expanded": {
        minHeight: 56,
      },
    },
    content: {
      "&$expanded": {
        margin: "12px 0",
      },
    },
    expanded: {},
  },
  { name: "AccordionContainer" },
)(MuiAccordionSummary);

const CustomAccordionDetails = withStyles(
  theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }),
  { name: "AccordionContainer" },
)(MuiAccordionDetails);

export { CustomAccordion, CustomAccordionDetails, CustomAccordionSummary };
