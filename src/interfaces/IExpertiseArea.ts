import { ReactNode } from "react";

export interface IExpertiseArea {
  id: number;
  title: string;
  icon: ReactNode;
  description: string;
  color: string;
  tags: string[];
}
