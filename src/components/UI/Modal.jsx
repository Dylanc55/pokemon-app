import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const Modal = ({ children, open, className, onClose }) => {
  const dialog = useRef();

  let styles = classes.modal;
  if (className) styles += " " + className;

  useEffect(() => {
    const modal = dialog.current;

    if (open) modal.showModal();

    return () => modal.close();
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={styles} onClose={onClose}>
      {children}
    </dialog>,
    document.querySelector("#modal")
  );
};

export default Modal;
