import useProvinceContext from "@dashboard/provinces/hooks/useProvinceContext";
import { Box, Typography } from "@material-ui/core";
import { Button } from "@saleor/macaw-ui";
import React from "react";

import ModalWrapper from "../ModalWrapper/ModalWrapper";
import useStyles from "./styles";

interface IDeleteCityModalProps {
  open: boolean;
  closeFn: () => void;
}

const DeleteCityModal = ({ open, closeFn }: IDeleteCityModalProps) => {
  const { getCity, deleteCityDispatch } = useProvinceContext();
  const classes = useStyles();

  const handleRemoveCity = () => {
    deleteCityDispatch(getCity.city_id);
    closeFn();
  };

  return (
    <ModalWrapper open={open} closeFn={closeFn}>
      <div className={classes.paper}>
        <Box className={classes.modal_header}>
          <Typography variant="h6">Delete</Typography>
        </Box>
        <Typography variant="body2" className="paper_typography_styles">
          Are You Sure You Want To Delete{" "}
          <Typography component="span" className="city_name_styles">
            {getCity && getCity.city_name}
          </Typography>
          ?
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
    </ModalWrapper>
  );
};

export default DeleteCityModal;
