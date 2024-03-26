export type Tab = {
  id: number;
  icon: JSX.Element;
};

export interface TabsType {
  stepOne?: Tab;
  stepTwo?: Tab;
  stepThree?: Tab;
}

export interface User {
  username: string;
  password: string;
  clue?: string;
}
