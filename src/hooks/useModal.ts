import { useDisclosure } from '@chakra-ui/react';

export function useModal() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
  
  const onCloseModal = () => {
    onClose();
    return;
  };

  const onOpenModal = () => {
    onOpen();
    return;
  };

  const props = {
    is: isOpen,
    close: onCloseModal,
    open: onOpenModal,
    toggle: onToggle
  }

  return {
    isModalOpen: isOpen,
    onCloseModal,
    onOpenModal,
    onToggleModal: onToggle,
    ModalManager: props,
  }
};
