import { ModalWarn } from './Warn';

type TModalWarnGoogleAccount = {
  onClose: () => void;
  isOpen: boolean;
  text: string;
};

const ModalWarnGoogleAccount = ({ isOpen, onClose, text }: TModalWarnGoogleAccount) => {
  return (
    <ModalWarn 
      title='Google Account'
      text={text}
      isOpen={isOpen} 
      onClose={onClose}
    />
  );
};

export { ModalWarnGoogleAccount };
