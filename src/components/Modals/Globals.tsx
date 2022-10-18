import { useAppModals } from 'context/ModalsProvider';
import { ModalWarn } from './Warn';

const GlobalModals = () => {
  const { PropsModal } = useAppModals();

  return (
    <>
      {PropsModal.map(_props => (
        <ModalWarn key={_props.id} {..._props} />
      ))}
    </>
  );
};

export { GlobalModals };
