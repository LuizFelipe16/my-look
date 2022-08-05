import { AppSettings } from '../_lib/global';

type FetchEndpoints = {
  ApiURL: string;
  SwinsURL?: string;
}

export const Settings: AppSettings<FetchEndpoints> = {
  AppName: 'MyLook',
  Description: 'E-commerce',
  CreatedAt: '31 Julho, 2022',
  Creator: 'Luiz Felipe Siqueira Felizatti',
  Developers: [{ name: 'Luiz Felipe Siqueira Felizatti' }],
  Application: {
    IsWeb: true,
    IsMobile: false,
    IsMadeForLearning: true,
    GitRepository: 'https://github.com/LuizFelipe16/my-look.git'
  },
  Fetch: {
    ApiURL: '',
    SwinsURL: '',
  },
  ContactINFO: {
    Website: 'luizfelipe.vercel.app',
    ContactEMAIL: 'felipefelizatti215@gmail.com',
    ContactPHONE: '+55 (19) 98952-2121',
  },
};
