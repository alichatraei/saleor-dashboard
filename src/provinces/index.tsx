import { WindowTitle } from "@dashboard/components/WindowTitle";
import { sectionNames } from "@dashboard/intl";
import React from "react";
import { useIntl } from "react-intl";

import ProvincesListPage from "./components/ProvincesListPage/ProvincesListPage";
import { ProvinceProvider } from "./context/provinceContext";
import provincesList from "./utils/provincesList";

const ProvincesSection: React.FC<{}> = () => {
  const intl = useIntl();
  return (
    <>
      <ProvinceProvider
        provinces={provincesList}
        filteredProvinces={provincesList}
        cityIdSelected={0}
      >
        <>
          <WindowTitle title={intl.formatMessage(sectionNames.provinces)} />
          <ProvincesListPage />
        </>
      </ProvinceProvider>
    </>
  );
};

export default ProvincesSection;
