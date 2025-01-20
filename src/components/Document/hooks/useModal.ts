import { useState } from 'react';

export function useModal() {
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return { modal, toggleModal };
}
