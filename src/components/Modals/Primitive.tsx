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
import { ReactComponent } from '_lib/global';

interface PModalProps extends ModalProps {
  renderFooter?: () => ReactComponent;
  children: ReactComponent;
  title?: string;
  renderHeader?: () => ReactComponent;
  hasCloseButton?: boolean;
  noPaddingBody?: boolean;
  colorCloseButton?: string;
  alignHeader?: 'center' | 'start' | 'left' | 'end' | 'right';
  bgContent?: string;
};

const ModalPrimitive = (
  { 
    children, 
    renderFooter, 
    title, 
    renderHeader, 
    hasCloseButton = false, 
    colorCloseButton = theme.colors.black,
    isCentered, 
    noPaddingBody = false,
    alignHeader = 'start',
    bgContent = theme.colors.white,
    ...rest 
  }: PModalProps
) => {

  const pStylesBody = noPaddingBody ? { padding: 0 } : {}
  
  return (
    <Modal isCentered {...rest}>
      <ModalOverlay />
      <ModalContent bg={bgContent}>
        {title || renderHeader ? (
          <ModalHeader textAlign={alignHeader}>
            {!!title ? title : !!renderHeader && renderHeader()}
          </ModalHeader>
        ) : null}
        
        {hasCloseButton ? <ModalCloseButton size='lg' color={colorCloseButton} /> : null}
        
        <ModalBody style={{ ...pStylesBody }}>
          {children}
        </ModalBody>
  
        {renderFooter ? (
          <ModalFooter>
            {renderFooter()}
          </ModalFooter>
        ) : null}
      </ModalContent>
    </Modal>
  );
}

export { ModalPrimitive };
