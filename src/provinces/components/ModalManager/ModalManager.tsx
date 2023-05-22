import React from "react";

import AddModal from "../AddModal/AddModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import EditProvinceModal from "../EditProvinceModal/EditProvinceModal";

interface IModalManagerProps {
  modalName: string | boolean;
  closeFn: () => void;
}

const ModalManager = (props: IModalManagerProps) => {
  const { modalName, closeFn } = props;
  return (
    <>
      <AddModal open={modalName === "Add"} closeFn={closeFn} />
      <EditModal open={modalName === "Edit"} closeFn={closeFn} />
      <DeleteModal open={modalName === "Delete"} closeFn={closeFn} />
      <EditProvinceModal
        open={modalName === "ProvinceEditModal"}
        closeFn={closeFn}
      />
    </>
  );
};

export default ModalManager;
