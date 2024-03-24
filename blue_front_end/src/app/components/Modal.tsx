import "../styling/Modal.css"

import XIcon from '../assets/icons/XIcon';

interface ModalProps {
  handleClose: () => void;
  children?: any;
  className?: string;
  classNameBody?: string;
  classNameHeader?: string;
  title?: string;
}

const Modal = (props: ModalProps) => {
  const {
    className = '',
    classNameBody = 'padding-full',
    classNameHeader = '',
    title = '',
  } = props;

  return (
    <div className={'modal-bg '} onMouseDown={props.handleClose}>
      <div
        onMouseDown={(event) => {
          event.stopPropagation();
        }}
        className={'modal ' + className}
      >
        <div className={'modal-header border-radius-top ' + classNameHeader}>
          <div className="modal-title display-inline-block float-left font-bold">{title}</div>
          <div
            onClick={props.handleClose}
            className="modal-close display-inline-block clickable unselectable"
          >
            <XIcon className="fill-svg-primary"/>
          </div>
        </div>
        <div className={'modal-body border-radius-bottom ' + classNameBody}>{props.children}</div>
      </div>
    </div>
  );
};

export default Modal;
