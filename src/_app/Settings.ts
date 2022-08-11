import { AppSettings } from '_lib/global';

type FetchEndpoints = {
  ApiURL: string;
  ApiNextURL: string;
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
    ApiNextURL: '/api',
  },
  ContactINFO: {
    Website: 'luizfelipe.vercel.app',
    ContactEMAIL: 'felipefelizatti215@gmail.com',
    ContactPHONE: '+55 (19) 98952-2121',
  },
  ApiCredentials: {
    FaunaKey: process.env.FAUNA_DATABASE_KEY,
    AuthSecretCode: process.env.AUTH_SECRET,
  }
};
