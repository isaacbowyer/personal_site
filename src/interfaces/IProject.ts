import { IClientFeedback } from "./IClientFeedback";
import { IProjectImages } from "./IProjectImages";

export interface IProject {
  id: number;
  title: string;
  description: string;
  overview: string;
  technologies: string[];
  backgroundColor: string;
  link: string;
  category: string;
  images: IProjectImages;
  clientFeedback: IClientFeedback;
}
