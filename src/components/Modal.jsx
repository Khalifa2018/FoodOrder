import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ content, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return (
    <dialog ref={dialog} className="modal">
      {content}
      <form method="dialog" className="modal-actions">
        {actions}
      </form>
    </dialog>
  );
});

export default Modal;
