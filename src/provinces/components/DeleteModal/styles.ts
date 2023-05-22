import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  {
    paper: {
      position: "absolute",
      width: 600,
      backgroundColor: "#fff",
      bottom: "40%",
      left: "25%",
      "& > .paper_typography_styles": {
        padding: "1rem",
      },
    },
    modal_header: {
      margin: "1rem",
    },
    buttons_wrapper: {
      display: "flex",
      justifyContent: "flex-end",
      "& > .MuiButtonBase-root": {
        margin: "1rem",
      },
      "& > .buttons_wrapper_delete": {
        backgroundColor: "#6b0036 !important",
        color: "white",
        border: "none",
      },
    },
    textfield_wrapper: {
      marginBottom: "3rem",
      padding: "2rem",
      "& > .textfield": {
        margin: "1rem 0 !important",
      },
    },
  },
  { name: "styles" },
);
export default useStyles;
