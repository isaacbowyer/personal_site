import { IconType } from "react-icons";

export interface IContact {
  id: number;
  title: string;
  icon: IconType;
  url?: string;
}
