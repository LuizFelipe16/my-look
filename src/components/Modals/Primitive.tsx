import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps
} from '@chakra-ui/react';
import { theme } from '_app';
import { ReactComponent, TColor } from '_lib/global';

interface PModalProps extends ModalProps {
  renderFooter?: () => ReactComponent;
  children: ReactComponent;
  title?: string;
  renderHeader?: () => ReactComponent;
  hasCloseButton?: boolean;
  noPaddingBody?: boolean;
  colorCloseButton?: TColor;
};

const ModalPrimitive = ({ children, renderFooter, title, renderHeader, hasCloseButton = false, isCentered, noPaddingBody = false, ...rest }: PModalProps) => {
  const pStylesBody = noPaddingBody && { padding: 0 }
  
  return (
    <Modal isCentered {...rest}>
      <ModalOverlay />
      <ModalContent bg={theme.colors.transparent}>
        {!!title || !!renderHeader && (
          <ModalHeader>
          {!!title ? title : !!renderHeader && renderHeader()}
        </ModalHeader>
        )}
        {hasCloseButton && <ModalCloseButton size='lg' color={theme.colors.background} />}
        <ModalBody style={{ ...pStylesBody }}>
          {children}
        </ModalBody>
  
        {!!renderFooter && (
          <ModalFooter>
            {renderFooter()}
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
}

export { ModalPrimitive };
