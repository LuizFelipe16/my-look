import { AppSettings } from '../_lib/global';

export const Settings: AppSettings = {
  AppName: 'MyTemplate Web',
  CompanyName: 'MyTemplate Web',
  Description: 'MyTemplate Web',
  CreatedAt: '22 Julho, 2022',
  Creator: 'Luiz Felipe Siqueira Felizatti',
  Developers: [{ name: 'Luiz Felipe Siqueira Felizatti' }],
  Application: {
    IsWeb: true,
    IsMobile: false,
    IsMadeForLearning: true,
  },
  Fetch: {
    ApiURL: '',
    DevelopmentURL: '',
  },
  Social: {},
  ContactINFO: {
    Website: 'luizfelipe.vercel.app',
    ContactEMAIL: 'felipefelizatti215@gmail.com',
    ContactPHONE: '5519989522121',
  },
  ApiCredentials: {},
};
