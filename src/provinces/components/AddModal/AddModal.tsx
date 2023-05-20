import { useProvinceContext } from "@dashboard/provinces/context/provincesContext";
import { Box, TextField } from "@material-ui/core";
import { Button } from "@saleor/macaw-ui";
import React, { ChangeEvent, useState } from "react";

import ModalRender from "../ModalRender/ModalRender";
import useStyles from "./styles";

interface IAddModalProps {
  open: boolean;
  closeFn: () => void;
  provinceId?: number;
}

const AddModal = (props: IAddModalProps) => {
  const { open, closeFn, provinceId } = props;
  const classes = useStyles();
  const { addNewCity } = useProvinceContext();
  const [cityName, setCityName] = useState<string>("");
  const [priority, setPriority] = useState<string>("");

  const handleSave = () => {
    if (provinceId) {
      addNewCity({
        province_id: provinceId,
        city_name: cityName,
        city_priority: +priority,
      });
    }
    closeFn();
  };

  return (
    <ModalRender open={open} closeFn={closeFn}>
      <div className={classes.paper}>
        <Box className={classes.textfield_wrapper}>
          <TextField
            className="textfield"
            label="Name"
            variant="outlined"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCityName(e.target.value);
            }}
            fullWidth
          />
          <TextField
            className="textfield"
            label="Priority"
            variant="outlined"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setPriority(e.target.value);
            }}
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
    </ModalRender>
  );
};

export default AddModal;
