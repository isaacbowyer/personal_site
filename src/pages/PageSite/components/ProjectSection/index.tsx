import * as Chakra from "@chakra-ui/react";
import { AnimatedTitleWithHeader } from "@/components/atoms/AnimatedTitleWithHeader";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  backgroundColor: string;
  link: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Occupational Health (OH) App",
    description:
      "Dissertation project focused on supporting individuals recovering from Long Covid, helping them in their self-management and return to work.",
    imageUrl: "images/projects/occupational_health_app.png",
    technologies: ["React Native", "Firebase", "Gluestack UI", "Figma", "Expo"],
    backgroundColor: "linear-gradient(to bottom, #4A90E2, #7AB8F5, #B3D9FF)",
    link: "#expertise",
    category: "Mobile Apps",
  },
  {
    id: 2,
    title: "Personal Website",
    description:
      "A professional personal portfolio website designed to highlight my projects, demonstrate my expertise, present my work experience, and provide easy access to contact information.",
    imageUrl: "images/projects/personal_website.png",
    technologies: ["React", "Next.js", "Chakra UI", "Figma", "TypeScript"],
    backgroundColor:
      "linear-gradient(to bottom, #ff9a9e, #fad0c4, #fad0c4, #fbc7a4, #f6d365)",
    link: "",
    category: "Web Apps",
  },
];

const MotionSimpleGrid = motion(Chakra.SimpleGrid);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Delay between cards
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const categories = ["All", "Mobile Apps", "Web Apps"]; // Customize

export const ProjectSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredItems =
    activeFilter === "All"
      ? projects
      : projects.filter((item) => item.category === activeFilter);

  // Count items per category (including All)
  const categoryCounts = categories.reduce((acc, cat) => {
    if (cat === "All") {
      acc[cat] = projects.length;
    } else {
      acc[cat] = projects.filter((item) => item.category === cat).length;
    }
    return acc;
  }, {} as Record<string, number>);

  console.log(filteredItems, activeFilter);

  return (
    <Chakra.VStack w="full" id="projects" gap={8}>
      <AnimatedTitleWithHeader
        title="PROJECTS"
        header="Innovative solutions I've designed and developed, showcasing real-world applications of my technical skills."
      />

      <Chakra.VStack w="full" align="start" gap={2}>
        {/* Label */}
        <Chakra.Text
          fontWeight="bold"
          w="full"
          textAlign={{ base: "center", md: "left" }}
        >
          Filter By:
        </Chakra.Text>

        {/* Buttons Wrap */}
        <Chakra.Wrap gap={2} justify={{ base: "center", md: "start" }} w="full">
          {categories.map((cat) => (
            <Chakra.WrapItem key={cat}>
              <Chakra.Button
                size="sm"
                variant={activeFilter === cat ? "solid" : "outline"}
                onClick={() => setActiveFilter(cat)}
              >
                {cat} ({categoryCounts[cat] || 0})
              </Chakra.Button>
            </Chakra.WrapItem>
          ))}
        </Chakra.Wrap>
      </Chakra.VStack>

      {/* Responsive SimpleGrid */}
      <MotionSimpleGrid
        minChildWidth="300px"
        gap={8}
        w="full"
        alignItems="start"
        justifyItems={{ base: "center", md: "start" }}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        key={activeFilter}
      >
        {filteredItems.map((project) => (
          <motion.div key={project.id} variants={cardVariants}>
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </MotionSimpleGrid>
    </Chakra.VStack>
  );
};
