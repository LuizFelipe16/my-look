import { 
  Spinner,
  Icon, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody
} from "@chakra-ui/react";
import { useAppStatus } from "context";
import { FaCheck } from "react-icons/fa";
import { theme } from "_app";
import { myStyles } from "_lib/web";

type TAppStatusProps = { };

const borderRadius = 20;
const size = '5rem';

export const AppStatus = ({ }: TAppStatusProps) => {
  const { AppStatus, appStatus } = useAppStatus();

  const isShow = appStatus === 'loading' || appStatus === 'done';
  
  return (
    <Modal isOpen={isShow} onClose={AppStatus.closeAppStatus} isCentered>
      <ModalOverlay />
      <ModalContent w={size} h={size} borderRadius={borderRadius}>
        <ModalBody
          bg={theme.colors.background}
          borderRadius={borderRadius}
          display='flex'
          alignItems='center'
          justifyContent='center'
        >
          <AppStatusStyles>
            {appStatus === 'loading' && <Spinner thickness='4px' size={'lg'} color={theme.colors.primary} />}
            {appStatus === 'done' && <Icon as={FaCheck} className='status-done' fontSize={'3xl'} color={theme.colors.primary} />}
          </AppStatusStyles>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const AppStatusStyles = myStyles.create(theme => ([
  theme.myStyles.create('status-done', [
    theme.animation.apply('appear_done', 2, 'infinite'),
    theme.animation.define.full(
      'appear_done', 
      [theme.animation.transform.apply((t) => [t.scale(1.0)])], 
      [theme.animation.transform.apply((t) => [t.scale(0.4)])], 
      [theme.animation.transform.apply((t) => [t.scale(1.0)])], 
    )
  ]),
]), 'div');
