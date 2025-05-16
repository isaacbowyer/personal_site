import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { Code } from "@chakra-ui/react";
import { useState } from "react";
import { CgSmartphone } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { useIsMobile } from "../useIsMobile";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";

export const useExpertiseSection = () => {
  const { state } = useIsMobile();
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const handleClickActiveCard = (id: number) => {
    const newActiveCard = validateOptionsBasedOnBoolean(
      activeCard === id,
      0,
      id
    );
    setActiveCard(newActiveCard);
  };

  const EXPERTISE_AREAS: IExpertiseArea[] = [
    {
      id: 1,
      title: "Software Engineer",
      icon: <Code width="8" height="8" />,
      description:
        "Experienced in building cloud-based SaaS products using AI, including GPT-4 for automation and user interaction.",
      color: "from-blue-500 to-cyan-400",
      borderColor: "border-blue-400",
    },
    {
      id: 2,
      title: "Fullstack Web Developer",
      icon: <LuLayoutDashboard width="8" height="8" />,
      description:
        "Proficient in using JavaScript, TypeScript, React, Next.js, Python, and Django, gained through over 2 years of development.",
      color: "from-purple-500 to-pink-500",
      borderColor: "border-purple-400",
    },
    {
      id: 3,
      title: "Mobile App Developer",
      icon: <CgSmartphone width="8" height="8" />,
      description:
        "Skilled in building cross-platform mobile apps with React Native and Firebase, focusing on responsive UI/UX for iOS and Android.",
      color: "from-amber-500 to-orange-400",
      borderColor: "border-amber-400",
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
