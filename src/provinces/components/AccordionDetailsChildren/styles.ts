import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(
  {
    city_card_container: {
      width: "100%",
      margin: "1rem 0",
    },
    box: {
      margin: "1rem 0",
      display: "flex",
      width: "100%",
      alignItems: "center",
      minHeight: "6rem",
      justifyContent: "space-between",
      borderRadius: "0.5rem",
      "&:hover": {
        backgroundColor: "#e3e1e1",
      },
    },
    city_priority_typography: { margin: "0 4rem" },
    icon_button: {
      flex: 1,
      border: "none",
      backgroundColor: "transparent",
      color: "black",
      margin: "1rem",
    },
  },
  { name: "styles" },
);

export default useStyles;
