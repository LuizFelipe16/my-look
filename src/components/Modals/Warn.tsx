import { myStyles, Text } from '_lib/web';
import { ModalPrimitive } from './Primitive';

type TModalWarn = {
  onClose: () => void;
  isOpen: boolean;
  text: string;
  title: string;
};

const ModalWarn = ({ isOpen, onClose, text, title }: TModalWarn) => {
  return (
    <ModalPrimitive 
      title={title}
      isOpen={isOpen} 
      onClose={onClose} 
      alignHeader='center' 
      size={'xl'}
      hasCloseButton
    >
      <Warn>
        <Text style='text' text={text} />
      </Warn>
    </ModalPrimitive>
  );
};

const Warn = myStyles.create(theme => ([
  theme.w.size(100, '%'),
  theme.h.auto(),
  theme.padding.bottom.size(2),
  theme.border.rounded.lg,
  
  theme.myStyles.childClass('text', [
    theme.font.apply('rg', 1, theme.font.typography.text, theme.colors.black),
    theme.font.style.alignCenter,
  ])
]), 'div', false);

export { ModalWarn };
