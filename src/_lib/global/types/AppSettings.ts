type Developer = {
  name: string;
  office?: string;
};

type Fetch = {
  ApiURL: string;
}

export type AppSettings<APIs extends Fetch, TC> = {
  AppName: string;
  Description: string;
  CreatedAt: string;
  Creator: string;
  Developers: Developer[];
  Application: {
    IsWeb: boolean | `https://${string}` | `http://${string}`;
    IsMobile: boolean | string;
    IsMadeForLearning?: boolean;
    GitRepository?: string;
    Language: 'en' | 'pt';
  };
  DevelopmentMode?: {
    isActivated?: boolean;
    isDev?: boolean;
    HostPort: string;
  };
  Fetch: APIs;
  SocialINFO?: {
    FacebookURL?: string;
    LinkedinURL?: string;
    InstagramURL?: string;
  };
  ContactINFO: {
    Website: string;
    ContactEMAIL: string;
    ContactPHONE: `+55 (19) ${number}-${number}`;
  };
  ApiCredentials?: TC;
};
