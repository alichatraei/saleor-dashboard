import { WindowTitle } from "@dashboard/components/WindowTitle";
import { sectionNames } from "@dashboard/intl";
import React from "react";
import { useIntl } from "react-intl";

import ProvincesListPage from "./components/ProvincesListPage/ProvincesListPage";

const ProvincesSection: React.FC<{}> = () => {
  const intl = useIntl();
  return (
    <>
      <WindowTitle title={intl.formatMessage(sectionNames.provinces)} />
      <ProvincesListPage />
    </>
  );
};

export default ProvincesSection;
