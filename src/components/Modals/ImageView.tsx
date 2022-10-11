import { myStyles } from '_lib/web';
import { ModalPrimitive } from './Primitive';

type TModalImage = {
  onClose: () => void;
  isOpen: boolean;
  src: string;
};

const ModalImageView = ({ isOpen, onClose, src }: TModalImage) => {
  return (
    <ModalPrimitive isOpen={isOpen} onClose={onClose} noPaddingBody hasCloseButton>
      <ImageView src={src} />
    </ModalPrimitive>
  );
};

const ImageView = myStyles.create(theme => ([
  theme.w.size(100, '%'),
  theme.h.size(25),
  theme.effect.filter.objectCover(),
  theme.border.rounded.lg,
]), 'img', false);

export { ModalImageView };
