import { useToast as ChakraUseToast } from '@chakra-ui/react';
import { toastOptions } from 'utils';

const useToast = () => {
  const toast = ChakraUseToast();

  const error = 'An unexpected error has occurred.';

  function errorToast(title: string = error) {
    toast({ title: title, status: 'error', ...toastOptions });
  }

  function successToast(title: string) {
    toast({
      title: title,
      status: 'success',
      ...toastOptions
    });
  }

  return {
    successToast,
    errorToast,
    standartErrorMessage: error,
  }
};

export { useToast };
