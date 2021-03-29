import React, { FC, useRef } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";

import "./ModalWrapper.scss";

interface ModalWrapperProps {
  onClose: () => void;
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  children,
  onClose,
}): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === modalRef.current) {
      onClose();
    }
  };

  return (
    <div ref={modalRef} className="modal-wrapper" onClick={handleClose}>
      <div className="modal">
        {children}
        <Button
          className="modal-close-button"
          shape="circle"
          icon={<CloseOutlined />}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ModalWrapper;
