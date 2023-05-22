import React from "react";

import AddCityModal from "../AddCityModal/AddCityModal";
import DeleteCityModal from "../DeleteCityModal/DeleteCityModal";
import EditCityModal from "../EditCityModal/EditCityModal";
import EditProvinceModal from "../EditProvinceModal/EditProvinceModal";

interface IModalManagerProps {
  modalName: string | boolean;
  closeFn: () => void;
}

const ModalManager = ({ modalName, closeFn }: IModalManagerProps) => (
  <>
    <AddCityModal open={modalName === "AddCityModal"} closeFn={closeFn} />
    <EditCityModal open={modalName === "EditCityModal"} closeFn={closeFn} />
    <DeleteCityModal open={modalName === "DeleteCityModal"} closeFn={closeFn} />
    <EditProvinceModal
      open={modalName === "EditProvinceModal"}
      closeFn={closeFn}
    />
  </>
);

export default ModalManager;
