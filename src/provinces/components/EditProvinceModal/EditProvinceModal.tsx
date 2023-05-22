import useProvinceContext from "@dashboard/provinces/context/hooks/useProvinceContext";
import { Box, TextField } from "@material-ui/core";
import { Button } from "@saleor/macaw-ui";
import React, { ChangeEvent, useEffect, useState } from "react";

import ModalRender from "../ModalRender/ModalRender";
import useStyles from "./styles";

interface IEditProvinceModalProps {
  open: boolean;
  closeFn: () => void;
}

const EditProvinceModal = ({ open, closeFn }: IEditProvinceModalProps) => {
  const classes = useStyles();
  const { editProvinceDispatch, provinceIdSelected, getProvince } =
    useProvinceContext();
  const [editName, setEditName] = useState<string>("");
  const [editPriority, setEditPriority] = useState<string>("");

  const handleEditButton = () => {
    editProvinceDispatch({
      province_id: provinceIdSelected,
      province_name: editName,
      province_priority: +editPriority,
    });
    closeFn();
  };

  useEffect(() => {
    if (getProvince) {
      setEditName(getProvince.province_name);
      setEditPriority(String(getProvince.province_priority));
    }
  }, [getProvince]);

  return (
    <ModalRender open={open} closeFn={closeFn}>
      <div className={classes.paper}>
        <Box className={classes.textfield_wrapper}>
          <TextField
            className="textfield"
            label="Name"
            value={editName}
            variant="outlined"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEditName(e.target.value);
            }}
            fullWidth
          />
          <TextField
            className="textfield"
            label="Priority"
            value={editPriority}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setEditPriority(e.target.value);
            }}
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
    </ModalRender>
  );
};

export default EditProvinceModal;
