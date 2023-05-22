import { TopNav } from "@dashboard/components/AppLayout";
import { Button } from "@dashboard/components/Button";
import { ListPageLayout } from "@dashboard/components/Layouts";
import { sectionNames } from "@dashboard/intl";
import React, { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

import AccordionContainer from "../AccordionContainer/AccordionContainer";
const ProvincesListPage = () => {
  const intl = useIntl();
  const [showModal, setShowModal] = useState<string | boolean>(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const openSpecificModal = (modalName: string): void => {
    setShowModal(modalName);
  };

  return (
    <ListPageLayout>
      <TopNav title={intl.formatMessage(sectionNames.provinces)}>
        <Button
          onClick={() => {
            openSpecificModal("AddCityModal");
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
        showModal={showModal}
        setShowModal={setShowModal}
        handleCloseModal={handleCloseModal}
      />
    </ListPageLayout>
  );
};

export default ProvincesListPage;
