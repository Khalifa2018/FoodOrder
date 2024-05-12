import { forwardRef } from "react";

const Modal = forwardRef(function Modal({ content, actions }, ref) {
  return (
    <dialog ref={ref} className="modal">
      {content}
      <form method="dialog" className="modal-actions">
        {actions}
      </form>
    </dialog>
  );
});

export default Modal;
