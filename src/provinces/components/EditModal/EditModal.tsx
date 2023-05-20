import { Box, TextField } from "@material-ui/core";
import { Button } from "@saleor/macaw-ui";
import React from "react";

import ModalRender from "../ModalRender/ModalRender";
import useStyles from "./styles";

interface IEditModalProps {
  open: boolean;
  closeFn: () => void;
}

const EditModal = ({ open, closeFn }: IEditModalProps) => {
  const classes = useStyles();
  return (
    <ModalRender open={open} closeFn={closeFn}>
      <div className={classes.paper}>
        <Box className={classes.textfield_wrapper}>
          <TextField
            className="textfield"
            label="Name"
            variant="outlined"
            fullWidth
          />
          <TextField
            className="textfield"
            label="Priority"
            variant="outlined"
          />
        </Box>
        <hr />
        <Box className={classes.buttons_wrapper}>
          <Button variant="secondary" onClick={closeFn}>
            Back
          </Button>
          <Button variant="primary">Save</Button>
        </Box>
      </div>
    </ModalRender>
  );
};

export default EditModal;
