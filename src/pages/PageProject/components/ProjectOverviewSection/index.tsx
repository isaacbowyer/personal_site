import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";

interface IProps {
  overview: string;
  technologies: string[];
}

const MotionVStack = motion(Chakra.VStack);
const MotionHStack = motion(Chakra.HStack);
const MotionBox = motion(Chakra.Box);

const animationVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

export const ProjectOverviewSection = ({ overview, technologies }: IProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4, once: true });

  return (
    <Chakra.VStack
      width="full"
      background={theme.colors.gradients.gray}
      id="overview"
    >
      <Chakra.VStack w="full" maxW="1200px" gap={8} mb={8}>
        <TitleWithHeader title="OVERVIEW" header={overview} />

        <AnimatePresence>
          <MotionVStack
            key="content"
            ref={ref}
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            borderBottomLeftRadius="8px"
            borderBottomRightRadius="8px"
            alignItems={{ base: "center", md: "start" }}
            justifyContent={{ base: "center", md: "start" }}
            width="full"
            py={4}
            gap={8}
          >
            <MotionHStack
              gap={4}
              flexWrap="wrap"
              align={{ base: "center", md: "start" }}
              justify={{ base: "center", md: "start" }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={animationVariants}
            >
              {technologies.map((skill) => (
                <MotionBox key={skill} variants={boxVariants}>
                  <Chakra.Badge
                    px={3}
                    py={2}
                    backgroundColor={theme.colors.white}
                    border="1px solid"
                    borderColor={theme.colors.gray.dark}
                    borderRadius="16px"
                    fontSize="lg"
                    whiteSpace="nowrap"
                    cursor="default"
                    transition="all 0.3s ease-in-out"
                    _hover={{
                      backgroundColor: theme.colors.blue.dark,
                      color: theme.colors.white,
                      borderColor: theme.colors.white,
                    }}
                  >
                    {skill}
                  </Chakra.Badge>
                </MotionBox>
              ))}
            </MotionHStack>
          </MotionVStack>
        </AnimatePresence>
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
