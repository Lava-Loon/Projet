import { useState } from "react";
import ConfirmModal from "../../components/ConfirmModal";

const useConfirm = () => {
  
  const [ data, setData ] = useState({
    open: false,
    text: "",
    action: () => {}
  });
  
  const confirm = (
    text: string,
    action: () => void
  ) => {
    setData({
      open: true,
      text,
      action
    });
  };

  const close = () => {
    setData({
      open: false,
      text: "",
      action: () => {}
    });
  };

  const Modal = data.open ? (
    <ConfirmModal
      text={data.text}
      onCancel={close}
      onConfirm={() => {
        data.action();
        close();
      }}
    />
  ) : null;

  return{
    confirm,
    ConfirmModal: Modal
  }
};

export default useConfirm;