import checkPriorityInput from "@dashboard/provinces/helpers/checkPriorityInput";
import useProvinceContext from "@dashboard/provinces/hooks/useProvinceContext";
import { Box, TextField } from "@material-ui/core";
import { Button } from "@saleor/macaw-ui";
import React, { ChangeEvent, useEffect, useState } from "react";

import ModalWrapper from "../ModalWrapper/ModalWrapper";
import useStyles from "./styles";

interface IEditCityModalProps {
  open: boolean;
  closeFn: () => void;
  province_id?: number;
  city_id?: number;
}

const EditCityModal = ({ open, closeFn }: IEditCityModalProps) => {
  const classes = useStyles();
  const { editCityDispatch, getCity } = useProvinceContext();
  const [editName, setEditName] = useState<string>("");
  const [editPriority, setEditPriority] = useState<string>("");

  const handleEditButton = () => {
    editCityDispatch({ city_name: editName, city_priority: editPriority });
    resetForm();
    closeFn();
  };

  const resetForm = () => {
    setEditName("");
    setEditPriority("");
  };

  const handleChangeCityName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setEditName(value);
  };

  const handleChangePriority = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value === "" || checkPriorityInput(value)) {
      setEditPriority(value);
    }
  };

  useEffect(() => {
    if (getCity) {
      setEditName(getCity.city_name);
      setEditPriority(String(getCity.city_priority));
    }
  }, [getCity]);

  return (
    <ModalWrapper open={open} closeFn={closeFn}>
      <div className={classes.paper}>
        <Box className={classes.textfield_wrapper}>
          <TextField
            className="textfield"
            label="Name"
            value={editName}
            variant="outlined"
            onChange={handleChangeCityName}
            fullWidth
          />
          <TextField
            className="textfield"
            label="Priority"
            value={editPriority}
            onChange={handleChangePriority}
            variant="outlined"
          />
        </Box>
        <hr />
        <Box className={classes.buttons_wrapper}>
          <Button variant="secondary" onClick={closeFn}>
            Back
          </Button>
          <Button variant="primary" onClick={handleEditButton}>
            Save
          </Button>
        </Box>
      </div>
    </ModalWrapper>
  );
};

export default EditCityModal;
