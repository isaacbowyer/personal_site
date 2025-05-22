import { TitleWithHeader } from "@/components/molecules/TitleWithHeader";
import { theme } from "@/theme";
import * as Chakra from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MotionBox = motion(Chakra.Box);

interface IProps {
  comment: string;
  clientName: string;
  clientRole: string;
}

export const ProjectClientSection = ({
  comment,
  clientName,
  clientRole,
}: IProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Chakra.VStack
      width="full"
      bg={theme.colors.gradients.gray}
      id="client"
      paddingBottom={4}
    >
      <Chakra.Box w="full" maxW="1200px">
        <Chakra.VStack align={{ base: "center", md: "start" }} gap={4}>
          <TitleWithHeader title="CLIENT TESTIMONIAL" />

          <Chakra.Container maxW="1200px" px={8}>
            <MotionBox
              ref={ref}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              bg="white"
              p={12}
              borderRadius="lg"
              boxShadow="2xl"
              maxW="1200px"
              mx="auto"
            >
              <Chakra.Text fontSize="1.3rem" fontStyle="italic" mb={8}>
                {`"${comment}"`}
              </Chakra.Text>

              <Chakra.Flex align="center">
                <Chakra.Icon
                  as={FaUser}
                  boxSize="60px"
                  mr={4}
                  color={theme.colors.blue.vivid}
                />
                <Chakra.Box>
                  <Chakra.Heading as="h4" size="sm" mb="1">
                    {clientName}
                  </Chakra.Heading>
                  <Chakra.Text color="gray.500" fontSize="sm">
                    {clientRole}
                  </Chakra.Text>
                </Chakra.Box>
              </Chakra.Flex>
            </MotionBox>
          </Chakra.Container>
        </Chakra.VStack>
      </Chakra.Box>
    </Chakra.VStack>
  );
};
