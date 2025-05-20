import { IWorkExperience } from "@/interfaces/IWorkExperience";

export const useWorkSection = () => {
  const workItems: IWorkExperience[] = [
    {
      id: 1,
      title: "Software Engineer @ Guildhawk",
      location: "London, UK",
      period: "2024–2025",
      companyDescription:
        "A UK-based company delivering AI-powered digital translation solutions to clients worldwide.",
      jobDescription:
        "Worked across the full stack to develop GAI Translate, an AI-powered machine translation SaaS application for 100+ B2B clients. The platform automated translation workflows and simplified expert review processes, becoming a key revenue-generating product for the company",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Redux",
        "Chakra UI",
        "Jest/Vitest",
        "Cypress",
        "Python",
        "Django",
        "Stripe",
        "OpenAI",
        "GPT-4 Tools",
        "CI/CD",
        "Figma",
        "Azure",
      ],
    },
    {
      id: 2,
      title: "Junior Software Engineer @ ELAROS",
      location: "Sheffield, UK",
      period: "2023-2024",
      companyDescription:
        "A healthcare technology company providing digital solutions for the NHS and private sector.",
      jobDescription:
        "Enhanced the UI/UX of the client’s digital self-recovery healthcare tools, including the COVID-19 Yorkshire Rehabilitation Scale (C19-YRS) platform. Also co-developed an Occupational Health (OH) mobile app for my final-year dissertation, aimed at supporting self-recovery and wellbeing.",
      skills: [
        "JavaScript",
        "TypeScript",
        "React Native",
        "Gluestack UI",
        "Cypress",
        "Figma",
      ],
    },
    {
      id: 3,
      title: "Placement Software Developer @ Guildhawk",
      location: "London, UK",
      period: "2022–2023",
      companyDescription:
        "A UK-based company delivering AI-powered digital translation solutions to clients worldwide.",
      jobDescription:
        "Worked at Guildhawk during my placement year on a cloud-based CRM/ERP system that significantly reduced managers’ workload by streamlining the management of companies, clients, linguists, and translations.",
      skills: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Redux",
        "Chakra UI",
        "Tailwind CSS",
        "Jest/Vitest",
        "Cypress",
        "Python",
        "Django",
        "ASP.NET",
        "Figma",
        "Azure",
      ],
    },
  ];

  return {
    state: {
      workItems: workItems,
    },
    methods: {},
  };
};
