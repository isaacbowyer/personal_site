import { IProject } from "@/interfaces/IProject";
import { theme } from "@/theme";
import { LINKS } from "../links";

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: "Occupational Health App",
    description:
      "A cross-platform mobile application designed to support individuals recovering from Long COVID",
    overview:
      "A Dissertation mobile application in collaboration with ELAROS, this mobile app supports individuals recovering from Long COVID by enabling self-management and facilitating their return to work. Built using React Native and Firebase, I focused on cross-platform compatibility, responsive UI/UX, and clean architecture principles. Following the success of this POC, the client integrated it into their production pipeline, with patients rating the app 72% during trials.",
    images: {
      previewImage: "/images/projects/occupational_health_app/project.png",
      featuredImage: "/images/projects/occupational_health_app/featured.png",
      galleryImages: [
        "/images/projects/occupational_health_app/gallery1.png",
        "/images/projects/occupational_health_app/gallery2.png",
      ],
    },
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
    clientFeedback: {
      comment:
        "Isaac has produced an excellent app throughout his work on this project. The app met the overall design requirements, and included all the features that were requested. I am really impressed.",
      name: "Henry Robinson",
      role: "IT Manager at Elaros",
    },
  },
  {
    id: 2,
    title: "Personal Website",
    description:
      "A professional personal portfolio website designed to highlight my projects, demonstrate my expertise, present my work experience, and provide easy access to contact information.",
    overview: "",
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
    images: {
      previewImage: "/images/projects/personal_website/project.png",
      featuredImage: "",
      galleryImages: [""],
    },
    clientFeedback: {
      comment: "",
      name: "",
      role: "",
    },
  },
];
