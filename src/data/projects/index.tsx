import { IProject } from "@/interfaces/IProject";
import { theme } from "@/theme";
import { LINKS } from "../links";

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: "Occupational Health (OH) App",
    description:
      "Dissertation project focused on supporting individuals recovering from Long Covid, helping them in their self-management and return to work.",
    imageUrl: "images/projects/occupational_health_app.png",
    technologies: [
      "TypeScript",
      "React Native",
      "Firebase",
      "Gluestack UI",
      "Figma",
      "Expo",
    ],
    backgroundColor: theme.colors.gradients.light_blue,
    link: LINKS.PROJECTS.OCCUPATIONAL_HEALTH_APP,
    category: "Mobile Apps",
  },
  {
    id: 2,
    title: "Personal Website",
    description:
      "A professional personal portfolio website designed to highlight my projects, demonstrate my expertise, present my work experience, and provide easy access to contact information.",
    imageUrl: "images/projects/personal_website.png",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Motion",
      "Figma",
      "Vercel",
    ],
    backgroundColor: theme.colors.gradients.sunset,
    link: "",
    category: "Web Apps",
  },
];
