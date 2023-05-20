import { WindowTitle } from "@dashboard/components/WindowTitle";
import { sectionNames } from "@dashboard/intl";
import React from "react";
import { useIntl } from "react-intl";

import ProvincesListPage from "./components/ProvincesListPage/ProvincesListPage";
import { ProvinceProvider } from "./context/provincesContext";
import provincesList from "./utils/provincesList";

const ProvincesSection: React.FC<{}> = () => {
  const intl = useIntl();
  return (
    <>
      <ProvinceProvider provinces={provincesList}>
        <>
          <WindowTitle title={intl.formatMessage(sectionNames.provinces)} />
          <ProvincesListPage />
        </>
      </ProvinceProvider>
    </>
  );
};

export default ProvincesSection;
