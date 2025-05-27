import { IWorkExperience } from "@/interfaces/IWorkExperience";

export const useWorkSection = () => {
  const workItems: IWorkExperience[] = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Guildhawk",
      location: "London, UK",
      period: "2024–2025",
      companyDescription:
        "A UK-based company delivering AI-powered digital translation solutions to clients worldwide.",
      jobDescription:
        "Worked across the full stack to develop GAI Translate, an AI-powered machine translation SaaS application for B2B clients. The platform automated translation workflows and simplified expert review processes, becoming a key revenue-generating product for the company.",
      skills: {
        frontend: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Redux",
          "Chakra UI",
        ],
        backend: ["Python", "Django"],
        testing: ["Jest", "Vitest", "Cypress"],
        tools: ["Git", "Azure", "CI/CD", "OpenAI", "GPT-4", "Stripe", "Figma"],
      },
    },
    {
      id: 2,
      title: "Junior Software Engineer",
      company: "ELAROS",
      location: "Sheffield, UK",
      period: "2023-2024",
      companyDescription:
        "A healthcare technology company providing digital solutions for the NHS and private sector.",
      jobDescription:
        "Enhanced the UI/UX of the client’s digital self-recovery healthcare tools, including the COVID-19 Yorkshire Rehabilitation Scale (C19-YRS) platform. Also expanded my placement and co-developed an Occupational Health (OH) mobile app for my final-year dissertation, aimed at supporting self-recovery and wellbeing.",
      skills: {
        frontend: [
          "JavaScript",
          "TypeScript",
          "React",
          "React Native",
          "Gluestack UI",
        ],
        backend: ["Firebase", "Cloud Firestore"],
        testing: ["Cypress"],
        tools: ["Git", "Expo", "Figma"],
      },
    },
    {
      id: 3,
      title: "Placement Software Developer",
      company: "Guildhawk",
      location: "London, UK",
      period: "2022–2023",
      companyDescription:
        "A UK-based company delivering AI-powered digital translation solutions to clients worldwide.",
      jobDescription:
        "Worked at Guildhawk during my placement year on a cloud-based CRM/ERP system that significantly reduced managers’ workload by streamlining the management of companies, clients, linguists, and translations.",
      skills: {
        frontend: [
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Redux",
          "Chakra UI",
          "Tailwind CSS",
        ],
        backend: ["Python", "Django", "ASP.NET"],
        testing: ["Jest", "Cypress"],
        tools: ["Git", "Azure", "Figma"],
      },
    },
  ];

  return {
    state: {
      workItems: workItems,
    },
  };
};
