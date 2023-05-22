import useProvinceContext from "@dashboard/provinces/context/hooks/useProvinceContext";
import { Box, Typography } from "@material-ui/core";
import { Button } from "@saleor/macaw-ui";
import React from "react";

import ModalRender from "../ModalRender/ModalRender";
import useStyles from "./styles";

interface IDeleteModalProps {
  open: boolean;
  closeFn: () => void;
}

const DeleteModal = ({ open, closeFn }: IDeleteModalProps) => {
  const { getCity, deleteCityDispatch } = useProvinceContext();
  const classes = useStyles();

  const handleRemoveCity = () => {
    deleteCityDispatch(getCity.city_id);
    closeFn();
  };

  return (
    <ModalRender open={open} closeFn={closeFn}>
      <div className={classes.paper}>
        <Box className={classes.modal_header}>
          <Typography variant="h6">Delete</Typography>
        </Box>
        <Typography variant="body2" className="paper_typography_styles">
          Are You Sure You Want To Delete {getCity && getCity.city_name} ?
        </Typography>
        <hr />
        <Box className={classes.buttons_wrapper}>
          <Button variant="secondary" onClick={closeFn}>
            Back
          </Button>
          <Button className="buttons_wrapper_delete" onClick={handleRemoveCity}>
            Delete
          </Button>
        </Box>
      </div>
    </ModalRender>
  );
};

export default DeleteModal;
