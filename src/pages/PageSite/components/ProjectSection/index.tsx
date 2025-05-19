import * as Chakra from "@chakra-ui/react";
import { AnimatedTitleWithHeader } from "@/components/atoms/AnimatedTitleWithHeader";
import { ProjectCard } from "@/components/molecules/ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  backgroundColor: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Occupational Health (OH) App",
    description:
      "Dissertation project focused on supporting individuals recovering from Long Covid, helping them in their self-management and return to work.",
    imageUrl: "images/projects/occupational_health_app.png",
    technologies: ["React Native", "Firebase", "Expo"],
    backgroundColor: "linear-gradient(to bottom, #4A90E2, #7AB8F5, #B3D9FF)",
    link: "#expertise",
  },
  {
    id: 2,
    title: "Personal Website",
    description:
      "Personal portfolio built with Next.js and Chakra UI to showcase my projects, blogs, and contact information.",
    imageUrl: "images/projects/personal_website.png",
    technologies: ["React", "Next.js", "TypeScript", "Chakra UI"],
    backgroundColor: "linear-gradient(to bottom, #FFD3B6, #FFAAA5, #FF8C61)",
    link: "",
  },
];

export const ProjectSection = () => {
  return (
    <Chakra.VStack w="full" id="projects" gap={8}>
      <AnimatedTitleWithHeader
        title="PROJECTS"
        header="Innovative solutions I've designed and developed, showcasing real-world applications of my technical skills."
      />

      {/* Responsive SimpleGrid */}
      <Chakra.SimpleGrid
        minChildWidth="300px"
        gap={8}
        w="full"
        alignItems="start"
        justifyItems={{ base: "center", md: "start" }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Chakra.SimpleGrid>
    </Chakra.VStack>
  );
};
