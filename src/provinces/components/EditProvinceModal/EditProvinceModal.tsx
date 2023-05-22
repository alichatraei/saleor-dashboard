import checkPriorityInput from "@dashboard/provinces/helpers/checkPriorityInput";
import useProvinceContext from "@dashboard/provinces/hooks/useProvinceContext";
import { Box, TextField } from "@material-ui/core";
import { Button } from "@saleor/macaw-ui";
import React, { ChangeEvent, useEffect, useState } from "react";

import ModalWrapper from "../ModalWrapper/ModalWrapper";
import useStyles from "./styles";

interface IEditProvinceModalProps {
  open: boolean;
  closeFn: () => void;
}

const EditProvinceModal = ({ open, closeFn }: IEditProvinceModalProps) => {
  const classes = useStyles();
  const { editProvinceDispatch, provinceIdSelected, getProvince } =
    useProvinceContext();
  const [editProvinceName, setEditProvinceName] = useState<string>("");
  const [editProvincePriority, setEditProvincePriority] = useState<string>("");

  const handleChangeProvinceName = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setEditProvinceName(value);
  };

  const handleChangeProvincePriority = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (value === "" || checkPriorityInput(value)) {
      setEditProvincePriority(value);
    }
  };

  const resetForm = () => {
    setEditProvinceName("");
    setEditProvincePriority("");
  };

  const handleEditButton = () => {
    editProvinceDispatch({
      province_id: provinceIdSelected,
      province_name: editProvinceName,
      province_priority: +editProvincePriority,
    });
    resetForm();
    closeFn();
  };

  useEffect(() => {
    if (getProvince) {
      setEditProvinceName(getProvince.province_name);
      setEditProvincePriority(String(getProvince.province_priority));
    }
  }, [getProvince]);

  return (
    <ModalWrapper open={open} closeFn={closeFn}>
      <div className={classes.paper}>
        <Box className={classes.textfield_wrapper}>
          <TextField
            className="textfield"
            label="Name"
            value={editProvinceName}
            variant="outlined"
            onChange={handleChangeProvinceName}
            fullWidth
          />
          <TextField
            className="textfield"
            label="Priority"
            value={editProvincePriority}
            onChange={handleChangeProvincePriority}
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

export default EditProvinceModal;
