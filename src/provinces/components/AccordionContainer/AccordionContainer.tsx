import useProvinceContext from "@dashboard/provinces/context/hooks/useProvinceContext";
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
  isShowAddModal: string | boolean;
  handleCloseModal: () => void;
  setIsShowAddModal: React.Dispatch<any>;
}

const AccordionContainer = ({
  isShowAddModal,
  handleCloseModal,
  setIsShowAddModal,
}: IAccordionContainer) => {
  const classes = useStyles();
  const [provincesState, setProvincesState] = useState<IProvinces[] | []>([]);
  const {
    filteredProvinces,
    getProvinceDispatch,
    setProvinceSelectedIdDispatch,
    searchFilterDispatch,
  } = useProvinceContext();

  const [showActionButtons, setShowActionButtons] = useState<number>(-1);

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
          onClick={() => {
            setProvinceSelectedIdDispatch(province.province_id);
          }}
        >
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon />}
            onMouseEnter={() => {
              setShowActionButtons(index);
            }}
            onMouseLeave={() => {
              setShowActionButtons(-1);
            }}
          >
            <Typography>{province.province_id}</Typography>
            <Typography className={classes.province_name_typography_styles}>
              {province.province_name}
            </Typography>
            <Box display={showActionButtons === index ? "block" : "none"}>
              <IconButton
                onClick={() => {
                  setIsShowAddModal("ProvinceEditModal");
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
      <ModalManager modalName={isShowAddModal} closeFn={handleCloseModal} />
    </CustomBox>
  );
};
export default AccordionContainer;
