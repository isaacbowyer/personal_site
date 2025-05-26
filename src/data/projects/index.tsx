import { IProject } from "@/interfaces/IProject";
import { theme } from "@/theme";
import { LINKS } from "../links";

export const PROJECTS: IProject[] = [
  {
    id: 1,
    title: "Occupational Health App",
    description:
      "A cross-platform mobile app developed for ELAROS to assist individuals recovering from Long COVID, helping them regain their health and return to work effectively.",
    overview:
      "A dissertation mobile application developed in collaboration with ELAROS. This solution supports individuals recovering from Long COVID through self-assessments and facilitating their successful return to work. \n\n Built using React Native and Firebase, I focused on delivering cross-platform compatibility, responsive UI/UX design, and clean architecture principles like atomic design. The PoC received strong client feedback and was later integrated into the final product.",
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
    title: "GAI Translate",
    description:
      "An AI-powered tool that streamlined translation workflows and expert reviews in 60+ languages for B2B clients. This project became a key revenue-generating asset for Guildhawk.",
    overview: "",
    images: {
      previewImage: "/images/projects/gai_translate/project.png",
      featuredImage: "",
      galleryImages: [],
    },
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Chakra UI",
      "Python",
      "Django",
      "OpenAI",
      "Azure",
    ],
    backgroundColor: theme.colors.gradients.purple,
    link: LINKS.PROJECTS.GAI_TRANSLATE,
    category: "Web Apps",
    clientFeedback: {
      comment: "",
      name: "",
      role: "",
    },
  },
  {
    id: 3,
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
