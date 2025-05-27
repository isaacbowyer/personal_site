import * as Chakra from "@chakra-ui/react";
import { IWorkExperience } from "@/interfaces/IWorkExperience";
import { WorkItemsContainer } from "@/components/organisms/WorkItemsContainer";
import { motion } from "framer-motion";

interface IProps {
  experienceItems: IWorkExperience[];
}

const MotionBox = motion.create(Chakra.Box);

export const MainWorkSection = ({ experienceItems }: IProps) => {
  return (
    <Chakra.VStack
      width="full"
      backgroundGradient="linear-gradient(to bottom right, #f9fafb, #f3f4f6)"
      id="work"
      py={8}
      px={4}
    >
      <Chakra.VStack w="full" maxW="1200px" gap={8} mb={8}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          width="full"
        >
          <Chakra.VStack
            gap={4}
            textAlign={{ base: "center", md: "start" }}
            align={{ base: "center", md: "start" }}
            justifyContent={{ base: "center", md: "start" }}
            w="full"
          >
            <Chakra.Text
              fontSize={"4xl"}
              fontWeight="bold"
              color="black"
              lineHeight="1"
              fontFamily="sans-serif"
              letterSpacing="6px"
            >
              WORK
              <br />
              <Chakra.Text
                as="span"
                backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
                bgClip="text"
                fontSize={{ base: "4xl", md: "6xl" }}
                fontWeight="extrabold"
                fontFamily="sans-serif"
                letterSpacing="6px"
              >
                EXPERIENCE
              </Chakra.Text>
            </Chakra.Text>

            <Chakra.Box
              w="80px"
              h="4px"
              bgGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              borderRadius="full"
            />
          </Chakra.VStack>
        </MotionBox>

        <WorkItemsContainer items={experienceItems} />
      </Chakra.VStack>
    </Chakra.VStack>
  );
};
