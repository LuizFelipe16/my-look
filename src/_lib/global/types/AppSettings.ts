type Developer = {
  name: string;
  office?: string;
};

type Fetch = {
  ApiURL: string;
}

export type AppSettings<APIs extends Fetch> = {
  AppName: string;
  Description: string;
  CreatedAt: string;
  Creator: string;
  Developers: Developer[];
  Application: {
    IsWeb: boolean;
    IsMobile: boolean;
    IsMadeForLearning?: boolean;
    GitRepository?: string;
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
  ApiCredentials?: {
    FaunaKey?: string;
  };
};
