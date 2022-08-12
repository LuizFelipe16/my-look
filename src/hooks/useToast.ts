import { useToast as ChakraUseToast } from '@chakra-ui/react';
import { toastOptions } from 'utils';

const useToast = () => {
  const toast = ChakraUseToast();
  
  function errorToast(title: string) {
    toast({ title: title, status: 'error', ...toastOptions });
  }

  function successToast(title: string) {
    toast({ title: title, status: 'success', ...toastOptions });
  }

  return {
    successToast,
    errorToast
  }
};

export { useToast };
