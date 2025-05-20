import { IconType } from "react-icons";

export interface IExpertiseArea {
  id: number;
  title: string;
  icon: IconType;
  description: string;
  backgroundColor: string;
  borderColor: string;
  tags: string[];
}
