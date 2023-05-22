import useProvinceContext from "@dashboard/provinces/hooks/useProvinceContext";
import IProvinces from "@dashboard/provinces/interfaces/IProvinces";
import { Box, IconButton, TextField, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { ChangeEvent, useEffect, useState } from "react";

import AccordionDetailsChildren from "../AccordionDetailsChildren/AccordionDetailsChildren";
import ModalManager from "../ModalManager/ModalManager";
import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionSummary,
  CustomBox,
  useStyles,
} from "./styles";

interface IAccordionContainer {
  showModal: string | boolean;
  handleCloseModal: () => void;
  setShowModal: React.Dispatch<any>;
}

const AccordionContainer = ({
  showModal,
  handleCloseModal,
  setShowModal,
}: IAccordionContainer) => {
  const classes = useStyles();
  const [provincesState, setProvincesState] = useState<IProvinces[] | []>([]);
  const {
    filteredProvinces,
    getProvinceDispatch,
    setProvinceSelectedIdDispatch,
    searchFilterDispatch,
  } = useProvinceContext();

  const [isShowActionButtons, setIsShowActionButtons] = useState<number>(-1);
  const [expandedItemId, setExpandedItemId] = useState<number>(1);

  const toggleExpandAccordion = (Id: number): void => {
    setExpandedItemId(Id);
    setProvinceSelectedIdDispatch(Id);
  };

  const toggleShowActionButtons = (provinceIndex: number): void => {
    setIsShowActionButtons(provinceIndex);
  };

  const openSpecificModal = (modalName: string): void => {
    setShowModal(modalName);
  };

  useEffect(() => {
    setProvinceSelectedIdDispatch(1);
  }, []);

  useEffect(() => {
    setProvincesState(
      filteredProvinces.sort(
        (prev, current) => current.province_priority - prev.province_priority,
      ),
    );
  }, [filteredProvinces]);

  return (
    <CustomBox>
      <TextField
        placeholder="Search..."
        size="small"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          searchFilterDispatch(e.target.value);
        }}
        className={classes.search__textfield__styles}
      />
      {provincesState.map((province: IProvinces, index: number) => (
        <CustomAccordion
          key={province.province_id}
          square
          expanded={expandedItemId === province.province_id}
          onClick={() => {
            toggleExpandAccordion(province.province_id);
          }}
        >
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onMouseEnter={() => {
              toggleShowActionButtons(index);
            }}
            onMouseLeave={() => {
              toggleShowActionButtons(-1);
            }}
          >
            <Typography>{province.province_id}</Typography>
            <Typography className={classes.province_name_typography_styles}>
              {province.province_name}
            </Typography>
            <Box display={isShowActionButtons === index ? "block" : "none"}>
              <IconButton
                onClick={() => {
                  openSpecificModal("EditProvinceModal");
                  getProvinceDispatch(province.province_id);
                }}
                className={classes.icon_button}
              >
                <EditIcon />
              </IconButton>
            </Box>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            {province.children.length > 0 ? (
              <AccordionDetailsChildren children={province.children} />
            ) : (
              <Typography>شهری در این استان وجود ندارد</Typography>
            )}
          </CustomAccordionDetails>
        </CustomAccordion>
      ))}
      <ModalManager modalName={showModal} closeFn={handleCloseModal} />
    </CustomBox>
  );
};
export default AccordionContainer;
