import React from "react";

import AddModal from "../AddModal/AddModal";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";

interface IModalManagerProps {
  modalName: string | boolean;
  closeFn: () => void;
  province_id?: number;
}

const ModalManager = (props: IModalManagerProps) => {
  const { modalName, closeFn, province_id } = props;
  return (
    <>
      <AddModal
        open={modalName === "Add"}
        closeFn={closeFn}
        provinceId={province_id}
      />
      <EditModal open={modalName === "Edit"} closeFn={closeFn} />
      <DeleteModal open={modalName === "Delete"} closeFn={closeFn} />
    </>
  );
};

export default ModalManager;
