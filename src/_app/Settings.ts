import { AppSettings } from '../_lib/global';

type FetchEndpoints = {
  ApiURL: string;
  SwinsURL?: string;
}

export const Settings: AppSettings<FetchEndpoints> = {
  AppName: 'MyTemplate Web',
  Description: 'MyTemplate Web',
  CreatedAt: '22 Julho, 2022',
  Creator: 'Luiz Felipe Siqueira Felizatti',
  Developers: [{ name: 'Luiz Felipe Siqueira Felizatti' }],
  Application: {
    IsWeb: true,
    IsMobile: false,
    IsMadeForLearning: true,
    GitRepository: 'https://github.com/LuizFelipe16/my-web.git'
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
