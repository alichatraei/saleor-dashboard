import IProvinces from "@dashboard/provinces/interfaces/IProvinces";
import provincesList from "@dashboard/provinces/utils/provincesList";
import { Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";

import {
  CustomAccordion,
  CustomAccordionDetails,
  CustomAccordionSummary,
} from "./styles";
const AccordionContainer = () => {
  const [expanded, setExpanded] = useState<number>(1);

  const handleChange = (newExpanded: number) => {
    setExpanded(newExpanded);
  };

  return (
    <div>
      {provincesList.map((province: IProvinces) => (
        <CustomAccordion
          key={province.province_id}
          square
          expanded={expanded === province.province_id}
          onClick={() => {
            handleChange(province.province_id);
          }}
        >
          <CustomAccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon" />}
          >
            <Typography>{province.province_id}</Typography>
            <Typography>{province.province_name}</Typography>
          </CustomAccordionSummary>
          <CustomAccordionDetails>
            <Typography>{province.children && ""}</Typography>
          </CustomAccordionDetails>
        </CustomAccordion>
      ))}
    </div>
  );
};
export default AccordionContainer;
