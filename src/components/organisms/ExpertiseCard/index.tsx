import * as Chakra from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { CustomTag } from "@/components/atoms/CustomTag";

interface IProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  borderColor: string;
  isActive: boolean;
  onClick: () => void;
}

const MotionBox = motion(Chakra.Box);

export const ExpertiseCard = ({
  title,
  description,
  icon,
  color,
  borderColor,
  isActive,
  onClick,
}: IProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 30px -15px rgba(0,0,0,0.15)",
      transition: { duration: 0.2 },
    },
  };

  return (
    <MotionBox
      layout
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={variants}
      onClick={onClick}
      position="relative"
      overflow="hidden"
      p={6}
      rounded="xl"
      cursor="pointer"
      border="2px solid"
      borderColor={borderColor}
      bg="white"
      transition={{ duration: 0.3, ease: "easeOut" }}
      gridColumn={isActive ? { md: "span 3" } : undefined}
    >
      <MotionBox
        position="absolute"
        inset={0}
        bgGradient={color}
        opacity={0}
        _groupHover={{ opacity: 0.05 }}
        animate={{ opacity: isActive ? 0.1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <Chakra.Flex align="start" gap={4}>
        <MotionBox p={3} bgGradient={color} color="white" rounded="lg">
          {icon}
        </MotionBox>

        <Chakra.Box flex="1">
          <MotionBox>
            <Chakra.Heading size="md" mb={2} color="gray.800">
              {title}
            </Chakra.Heading>
          </MotionBox>

          <MotionBox>
            <Chakra.Text color="gray.600">{description}</Chakra.Text>
          </MotionBox>

          {isActive && (
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              mt={6}
            >
              <Chakra.SimpleGrid columns={{ base: 1, md: 3 }} gap={4} mt={4}>
                {title === "Software Engineer" && (
                  <>
                    <CustomTag label="AI Integration" />
                    <CustomTag label="SaaS Architecture" />
                    <CustomTag label="Cloud Infrastructure" />
                    <CustomTag label="GPT-4" />
                    <CustomTag label="Automation" />
                    <CustomTag label="CI/CD" />
                  </>
                )}
                {title === "Fullstack Web Developer" && (
                  <>
                    <CustomTag label="React" />
                    <CustomTag label="TypeScript" />
                    <CustomTag label="Next.js" />
                    <CustomTag label="Python" />
                    <CustomTag label="Django" />
                    <CustomTag label="RESTful APIs" />
                  </>
                )}
                {title === "Mobile App Developer" && (
                  <>
                    <CustomTag label="React Native" />
                    <CustomTag label="Firebase" />
                    <CustomTag label="iOS" />
                    <CustomTag label="Android" />
                    <CustomTag label="UI/UX" />
                    <CustomTag label="Responsive Design" />
                  </>
                )}
              </Chakra.SimpleGrid>
            </MotionBox>
          )}
        </Chakra.Box>
      </Chakra.Flex>
    </MotionBox>
  );
};
