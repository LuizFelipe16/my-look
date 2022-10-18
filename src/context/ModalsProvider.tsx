import { createContext, useContext, useState } from 'react';

type TProp = {
  id: `global-modal-${number}`;
  title: string;
  text: string;
  onClose: () => void;
  isOpen: boolean;
}

type AppModalsProviderData = {
  PropsModal: Array<TProp>
  OpenModal: {
    warnAccount: () => void;
    verifyLocationData: () => void;
  };
};

const AppModals = createContext({} as AppModalsProviderData);

export function AppModalsProvider({ children }: any) {
  const [isWarnAccount, setIsWarnAccount] = useState(false);
  const [verifyLocationData, setVerifyLocationData] = useState(false);

  const modalWarnAccount: TProp = {
    id: 'global-modal-1',
    title: 'Create your Account',
    text: `To access this content you need to have an account on the site. You can just login with a google account or create one, it's quick and easy.`,
    onClose: () => setIsWarnAccount(false),
    isOpen: isWarnAccount,
  }

  const modaVerifyLocationData: TProp = {
    id: 'global-modal-2',
    title: 'Verify your Location Data',
    text: `Before proceeding, please make sure your location data is correct.`,
    onClose: () => setVerifyLocationData(false),
    isOpen: verifyLocationData,
  }

  const dataProvider: AppModalsProviderData = {
    PropsModal: [
      {...modalWarnAccount},
      {...modaVerifyLocationData},
    ],
    OpenModal: {
      warnAccount: () => setIsWarnAccount(true),
      verifyLocationData: () => setVerifyLocationData(true),
    }
  }

  return (
    <AppModals.Provider value={dataProvider}>
      {children}
    </AppModals.Provider>
  );
}

export const useAppModals = () => useContext(AppModals);
