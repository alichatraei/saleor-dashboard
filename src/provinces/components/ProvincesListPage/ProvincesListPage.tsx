import { TopNav } from "@dashboard/components/AppLayout";
import { Button } from "@dashboard/components/Button";
import { ListPageLayout } from "@dashboard/components/Layouts";
import { sectionNames } from "@dashboard/intl";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import AccordionContainer from "../AccordionContainer/AccordionContainer";
const ProvincesListPage = () => {
  const intl = useIntl();
  const [isShowAddModal, setIsShowAddModal] = useState<any>(false);

  const handleCloseModal = () => {
    setIsShowAddModal(false);
  };

  return (
    <ListPageLayout>
      <TopNav title={intl.formatMessage(sectionNames.provinces)}>
        <Button
          onClick={() => {
            setIsShowAddModal("Add");
          }}
          variant="primary"
        >
          <FormattedMessage
            id="Px/gVb"
            defaultMessage="Create City"
            description="button"
          />
        </Button>
      </TopNav>
      <AccordionContainer
        isShowAddModal={isShowAddModal}
        setIsShowAddModal={setIsShowAddModal}
        handleCloseModal={handleCloseModal}
      />
    </ListPageLayout>
  );
};

export default ProvincesListPage;
