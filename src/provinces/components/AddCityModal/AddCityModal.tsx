import checkPriorityInput from "@dashboard/provinces/helpers/checkPriorityInput";
import useProvinceContext from "@dashboard/provinces/hooks/useProvinceContext";
import { Box, TextField } from "@material-ui/core";
import { Button } from "@saleor/macaw-ui";
import React, { ChangeEvent, useState } from "react";

import ModalWrapper from "../ModalWrapper/ModalWrapper";
import useStyles from "./styles";

interface IAddCityModalProps {
  open: boolean;
  closeFn: () => void;
}

const AddCityModal = (props: IAddCityModalProps) => {
  const { open, closeFn } = props;
  const classes = useStyles();
  const { addNewCityDispatch, provinceIdSelected } = useProvinceContext();
  const [cityName, setCityName] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleChangeCityName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setCityName(value);
  };

  const handleChangePriority = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value === "" || checkPriorityInput(value)) {
      setPriority(value);
    }
  };

  const resetForm = () => {
    setCityName("");
    setPriority("");
  };

  const handleSave = () => {
    if (provinceIdSelected) {
      addNewCityDispatch({
        province_id: provinceIdSelected,
        city_name: cityName,
        city_priority: +priority,
      });
    } else {
      alert("Something went wrong !!! Select a province to be added");
    }
    resetForm();
    closeFn();
  };

  return (
    <ModalWrapper open={open} closeFn={closeFn}>
      <div className={classes.paper}>
        <Box className={classes.textfield_wrapper}>
          <TextField
            className="textfield"
            label="Name"
            variant="outlined"
            value={cityName}
            onChange={handleChangeCityName}
            fullWidth
          />
          <TextField
            className="textfield"
            label="Priority"
            variant="outlined"
            value={priority}
            onChange={handleChangePriority}
          />
        </Box>
        <hr />
        <Box className={classes.buttons_wrapper}>
          <Button variant="secondary" onClick={closeFn}>
            Back
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </div>
    </ModalWrapper>
  );
};

export default AddCityModal;
