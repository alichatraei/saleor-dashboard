/* eslint-disable no-restricted-imports */
import useProvinceContext from "@dashboard/provinces/hooks/useProvinceContext";
import TProvinceCities from "@dashboard/provinces/types/TProvinceCities";
import { Box, IconButton, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect, useState } from "react";

import ModalManager from "../ModalManager/ModalManager";
import useStyles from "./styles";

interface IAccordionDetailsChildrenProps {
  children: TProvinceCities[];
}

const AccordionDetailsChildren: React.FC = ({
  children,
}: IAccordionDetailsChildrenProps): JSX.Element => {
  const classes = useStyles();
  const { getCityDispatch, setCitySelectedIdDispatch } = useProvinceContext();
  const [provinceCitiesState, setProvinceCitiesState] =
    useState<TProvinceCities[]>(children);
  const [showModal, setShowModal] = useState<boolean | string>(false);
  const [displayActionButtons, setDisplayActionButtons] = useState<number>(-1);

  const closeModal = (): void => {
    setShowModal(false);
  };

  const toggleShowActionButtons = (provinceIndex: number): void => {
    setDisplayActionButtons(provinceIndex);
  };

  const openSpecificModal = (modalName: string): void => {
    setShowModal(modalName);
  };

  useEffect(() => {
    setProvinceCitiesState(
      children.sort(
        (prev, current) => current.city_priority - prev.city_priority,
      ),
    );
  }, [children]);
  return (
    <Box className={classes.city_card_container}>
      {provinceCitiesState.map(
        (city: TProvinceCities, index: number): JSX.Element => (
          <div key={city.city_id}>
            <Box
              className={classes.box}
              onMouseEnter={() => {
                toggleShowActionButtons(index);
              }}
              onMouseLeave={() => {
                toggleShowActionButtons(-1);
              }}
            >
              <Box style={{ display: "flex" }}>
                <Typography className={classes.city_priority_typography}>
                  {city.city_priority}
                </Typography>
                <Typography>{city.city_name}</Typography>
              </Box>
              <Box display={displayActionButtons === index ? "block" : "none"}>
                <IconButton
                  onClick={() => {
                    openSpecificModal("EditCityModal");
                    setCitySelectedIdDispatch(city.city_id);
                    getCityDispatch(city.city_id);
                  }}
                  className={classes.icon_button}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    openSpecificModal("DeleteCityModal");
                    setCitySelectedIdDispatch(city.city_id);
                    getCityDispatch(city.city_id);
                  }}
                  className={classes.icon_button}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Box>
            <ModalManager modalName={showModal} closeFn={closeModal} />
          </div>
        ),
      )}
    </Box>
  );
};

export default AccordionDetailsChildren;
