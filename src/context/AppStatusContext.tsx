import { useDisclosure } from '@chakra-ui/react';
import { createContext, useState, useContext } from 'react';
import { onUpdate, SetState } from '_lib/global';

export type TAppStatus = 'loading' | 'done' | 'none';

type TAppStatusProvider = {
  isShow: boolean;
  AppStatus: {
    set: SetState<TAppStatus>;
    get: () => TAppStatus;
    is: TAppStatus;
    showAppStatus: () => void;
    closeAppStatus: () => void;
  },
  appStatus: TAppStatus;
  setAppStatus: SetState<TAppStatus>;
};

const AppStatusContent = createContext({} as TAppStatusProvider);

export function AppStatusProvider({ children }: any) {
  const { isOpen: isShow, onOpen: showAppStatus, onClose: closeAppStatus } = useDisclosure();
  const [appStatus, setAppStatus] = useState<TAppStatus>('none');
  
  const AppStatus = {
    set: setAppStatus,
    get: () => appStatus,
    is: appStatus,
    showAppStatus,
    closeAppStatus
  };

  onUpdate(() => {
    if (appStatus === 'loading') {
      showAppStatus()
    }
    if (appStatus === 'none') {
      closeAppStatus()
    }
    if (appStatus === 'done') {
      setTimeout(() => {
        setAppStatus('none');
      }, 2000)
    }
  }, [appStatus]);

  return (
    <AppStatusContent.Provider value={{ AppStatus, isShow: !isShow, setAppStatus, appStatus }}>
      {children}
    </AppStatusContent.Provider>
  )
}

export const useAppStatus = () => useContext(AppStatusContent);
