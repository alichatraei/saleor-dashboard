import { Modal } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";

const modalRootEl = document.getElementById("modal-root");

const ModalRender = ({ children, open = false, closeFn }) => {
  if (!open) {
    return null;
  }

  return ReactDOM.createPortal(
    <Modal open={open} onClose={closeFn}>
      {children}
    </Modal>,
    modalRootEl,
  );
};

export default ModalRender;
