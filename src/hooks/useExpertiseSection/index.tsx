import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { useState } from "react";
import { CgSmartphone } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { FiCode } from "react-icons/fi";
import { useIsMobile } from "../useIsMobile";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import { theme } from "@/theme";

export const useExpertiseSection = () => {
  const { state } = useIsMobile();
  const [activeCard, setActiveCard] = useState<number>(0);

  const handleClickActiveCard = (id: number) => {
    const isAlreadyActive = activeCard === id;
    const newActiveCard = validateOptionsBasedOnBoolean(isAlreadyActive, 0, id);
    setActiveCard(newActiveCard);
  };

  const EXPERTISE_AREAS: IExpertiseArea[] = [
    {
      id: 1,
      title: "Software Engineer",
      icon: <FiCode color={theme.colors.white} size="30" />,
      description:
        "Experienced in building cloud-based SaaS products using AI, including GPT-4 for automation and user interaction.",
      color: theme.colors.blue.medium,
      bgColor: theme.gradients.light_blue,
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
      icon: <LuLayoutDashboard color={theme.colors.white} size="30" />,
      description:
        "Proficient in using JavaScript, TypeScript, React, Next.js, Python, and Django, gained through over 2 years of development.",
      color: theme.colors.purple,
      bgColor: theme.gradients.light_purple,
      tags: [
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "Next.js",
        "Cypress",
        "Python",
        "Django",
        "RESTful APIs",
      ],
    },
    {
      id: 3,
      title: "Mobile App Developer",
      icon: <CgSmartphone color={theme.colors.white} size="30" />,
      description:
        "Skilled in building cross-platform mobile apps with React Native and Firebase, focusing on responsive UI/UX for iOS and Android.",
      color: theme.colors.orange,
      bgColor: theme.gradients.light_orange,
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
      isMobile: state.isMobile,
    },
    methods: {
      handleClickActiveCard,
    },
  };
};
