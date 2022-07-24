type Developer = {
  name: string;
  office?: string;
};

export type AppSettings = {
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
  Fetch: {
    ApiURL: string;
    ProductionURL?: string;
    DevelopmentURL?: string;
  };
  SocialINFO: {
    FacebookURL?: string;
    LinkedinURL?: string;
    InstagramURL?: string;
  };
  ContactINFO: {
    Website: string;
    ContactEMAIL: string;
    ContactPHONE: string;
  };
  ApiCredentials: {
    FaunaKey?: string;
  };
};
