import { useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);

  const hideModal = () => setModal(false);
  const showModal = () => setModal(true);

  return {
    modal,
    hideModal,
    showModal
  };
};
