import { TopNav } from "@dashboard/components/AppLayout";
import { Button } from "@dashboard/components/Button";
import { ListPageLayout } from "@dashboard/components/Layouts";
import { sectionNames } from "@dashboard/intl";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import AccordionContainer from "../AccordionContainer/AccordionContainer";

const ProvincesListPage = () => {
  const intl = useIntl();
  return (
    <ListPageLayout>
      <TopNav title={intl.formatMessage(sectionNames.provinces)}>
        <Button variant="primary">
          <FormattedMessage
            id="Px/gVb"
            defaultMessage="Create City"
            description="button"
          />
        </Button>
      </TopNav>
      <AccordionContainer />
    </ListPageLayout>
  );
};

export default ProvincesListPage;
