export interface Address {
    main: string;
    description: string;
    secondary: string;
    group: string;
    extraGroup: string | null;
    type: string;
    code: number | null;
    neighbourhood: string;
    isAvailableForSearch ? : boolean;
  }