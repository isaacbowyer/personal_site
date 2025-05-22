import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { useState } from "react";
import { CgSmartphone } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiCode } from "react-icons/fi";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";

const DEFAULT_ACTIVE_CARD = 0;
export const useExpertiseSection = () => {
  const [activeCard, setActiveCard] = useState<number>(DEFAULT_ACTIVE_CARD);

  const handleClickCard = (id: number) => {
    const isAlreadyActive = activeCard === id;
    const newActiveCard = validateOptionsBasedOnBoolean(
      isAlreadyActive,
      DEFAULT_ACTIVE_CARD,
      id
    );
    setActiveCard(newActiveCard);
  };

  const EXPERTISE_AREAS: IExpertiseArea[] = [
    {
      id: 1,
      title: "Software Engineer",
      icon: FiCode,
      description:
        "Experienced in building cloud-based SaaS products using AI technologies, including OpenAI APIs for automation and user interaction.",
      backgroundColor: "linear-gradient(to bottom right, #3b82f6, #22d3ee)",
      borderColor: "#60a5fa",
      tags: [
        "AI Integration",
        "Automation Tools",
        "SaaS Architecture",
        "Data Analysis",
        "DevOps & Cloud",
        "CI/CD Pipelines",
      ],
    },
    {
      id: 2,
      title: "Fullstack Web Developer",
      icon: LuLayoutDashboard,
      description:
        "Proficient in using JavaScript, TypeScript, React, Next.js, Python, and Django, gained through over 3 years of development.",
      backgroundColor: "linear-gradient(to bottom right, #8b5cf6, #ec4899)",
      borderColor: "#a78bfa",
      tags: [
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "Next.js",
        "Python",
        "Django",
        "Cypress",
        "Figma",
      ],
    },
    {
      id: 3,
      title: "Mobile App Developer",
      icon: CgSmartphone,
      description:
        "Skilled in building cross-platform mobile apps with React Native and Firebase, focusing on responsive UI/UX for iOS and Android.",
      backgroundColor: "linear-gradient(to bottom right, #f59e0b, #fb923c)",
      borderColor: "#fbbf24",
      tags: [
        "React Native",
        "Firebase",
        "iOS",
        "Android",
        "UI/UX",
        "Responsive Design",
      ],
    },
  ];

  return {
    state: {
      activeCard: activeCard,
      expertiseItems: EXPERTISE_AREAS,
    },
    methods: {
      handleClickCard: handleClickCard,
    },
  };
};
