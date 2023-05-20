import { Box } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(
  {
    search__textfield__styles: {
      width: "80%",
      margin: "1rem auto",
    },
    province_name_typography_styles: {
      paddingRight: "5rem",
    },
    icon_button: {
      backgroundColor: "transparent",
      color: "black",
      border: "none",
      marginRight: "1rem",
      borderRadius: "1rem",
      height: "50%",
    },
  },
  { name: "styles" },
);
const CustomBox = withStyles(
  {
    root: {
      margin: "1rem",
      display: "flex",
      flexDirection: "column",
    },
    content: {},
  },
  { name: "styles" },
)(Box);

const CustomAccordion = withStyles(
  {
    root: {
      direction: "rtl",
      border: "1px solid rgba(0, 0, 0, .125)",
      boxShadow: "none",
      margin: "0 !important",
      "&:not(:last-child)": {
        borderBottom: 0,
      },
      "&:hover": {
        cursor: "pointer",
      },
      "&$expanded": {
        backgroundColor: "#f2f2f2",
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
      boxSizing: "border-box",
    },
    expandIcon: {
      backgroundColor: "transparent",
      border: "none",
      color: "black",
    },
    content: {
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      minHeight: "7rem",
      margin: "0",
    },

    expanded: {
      margin: "0 !important",
    },
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

export {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionSummary,
  CustomBox,
  useStyles,
};
