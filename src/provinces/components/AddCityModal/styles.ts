import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  {
    paper: {
      position: "absolute",
      width: 600,
      backgroundColor: "#fff",
      bottom: "40%",
      left: "35%",
    },
    buttons_wrapper: {
      display: "flex",
      justifyContent: "flex-end",
      "& > .MuiButtonBase-root": {
        margin: "1rem",
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
