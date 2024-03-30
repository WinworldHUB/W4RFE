import { FC } from "react";

interface ModalDialogProps {
  children: React.ReactNode;
  onClose?: VoidFunction;
}

const ModalDialog: FC<ModalDialogProps> = ({ children, onClose }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Order details</h3>
          <span className="close" onClick={onClose}>
            &times;
          </span>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer text-end">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDialog;
