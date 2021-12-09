import ReactDom from 'react-dom';
import { useRef, useEffect } from 'react';
import './modal.scss';

const Modal = ({ isOpen, onClose, children }) => {
  const container = useRef(document.createElement('div'));

  useEffect(() => {
    document.body.appendChild(container.current);
    return () => {
      document.body.removeChild(container.current);
    };
  }, []);

  if (!isOpen) {
    return null;
  }

  const modal = (
    <div className="modal" data-testid="modal">
      <div className="modal__content">
        <div
          className="modal__backdrop"
          onClick={onClose}
          data-testid="modal-backdrop"
        />
        <div className="modal__box">{children}</div>
      </div>
    </div>
  );

  return ReactDom.createPortal(modal, container.current);
};

export default Modal;
