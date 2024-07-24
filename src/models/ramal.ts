export interface RamalsProp {
    ramais: {
      id: string;
      username: string;
      password: string;
      transport: string;
      aors: string;
      auth: string;
      context: string;
      disallow: string;
      allow: string;
    }[];
  }

  export interface RamalProp {
    ramal: {
      id: string;
      username: string;
      password: string;
      transport: string;
      aors: string;
      auth: string;
      context: string;
      disallow: string;
      allow: string;
    };
  }

  export interface Ramal {
    id: string;
    transport: string;
    username: string;
    password: string;
    aors: string;
    auth: string;
    context: string;
    disallow: string;
    allow: string;
  }
  