import { FC, useContext } from "react";

import { ModalsContext, ModalsState } from "../../context/modals/reducer";
import { ModalsTypes } from "../../context/modals/contracts/state";
import {
  CreateProfileModal,
  EditProfileModal,
  EditUserModal,
} from "../../modals";
import { closeModal } from "../../context/modals/actionCreators";

interface ModalProps {
  modal: ModalsState;
}

const ModalList: FC<ModalProps> = ({ modal }): JSX.Element => {
  const modalDispatch = useContext(ModalsContext);

  const handleCloseModal = () => {
    modalDispatch(closeModal());
  };

  return (
    <>
      {modal.modalType === ModalsTypes.CREATE_PROFILE && (
        <CreateProfileModal onClose={handleCloseModal} />
      )}
      {modal.modalType === ModalsTypes.EDIT_PROFILE && (
        <EditProfileModal onClose={handleCloseModal} profile={modal.state} />
      )}
      {modal.modalType === ModalsTypes.EDIT_USER && (
        <EditUserModal onClose={handleCloseModal} user={modal.state} />
      )}
    </>
  );
};

export default ModalList;
