import { ExpertiseCard } from "@/components/molecules/ExpertiseCard";
import { IExpertiseArea } from "@/interfaces/IExpertiseArea";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { CgSmartphone } from "react-icons/cg";
import { FiCode } from "react-icons/fi";
import { LuLayoutDashboard } from "react-icons/lu";

interface IProps {
  activeCard: number;
  setActiveCard: Dispatch<SetStateAction<number>>;
}

export const ExpertiseCardContainer = ({
  activeCard,
  setActiveCard,
}: IProps) => {
  const expertiseAreas = [
    {
      title: "Software Engineer",
      icon: <FiCode color={theme.colors.white} size="30" />,
      description:
        "Experienced in building cloud-based SaaS products using AI, including GPT-4 for automation and user interaction.",
      color: "bg-blue-gradient",
      borderColor: "border-blue",
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
      title: "Fullstack Web Developer",
      icon: <LuLayoutDashboard color={theme.colors.white} size="30" />,
      description:
        "Proficient in using JavaScript, TypeScript, React, Next.js, Python, and Django, gained through over 2 years of development.",
      color: "bg-purple-gradient",
      borderColor: "border-purple",
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
      title: "Mobile App Developer",
      icon: <CgSmartphone color={theme.colors.white} size="30" />,
      description:
        "Skilled in building cross-platform mobile apps with React Native and Firebase, focusing on responsive UI/UX for iOS and Android.",
      color: "bg-amber-gradient",
      borderColor: "border-amber",
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

  return (
    <main className="expertise-main">
      <motion.div
        className="expertise-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
      >
        {expertiseAreas.map((expertise, index) => {
          return (
            <ExpertiseCard
              key={index}
              index={index}
              title={expertise.title}
              icon={expertise.icon}
              description={expertise.description}
              colorClass={expertise.color}
              borderColor={expertise.borderColor}
              isActive={activeCard === index}
              tags={expertise.tags}
              onClick={() => setActiveCard(activeCard === index ? -1 : index)}
            />
          );
        })}
      </motion.div>
    </main>
  );
};
