import { motion } from "framer-motion";
import * as Chakra from "@chakra-ui/react";

const MotionBox = motion.create(Chakra.Box);

interface ISubTitle {
  color: string;
  title: string;
}
interface IProps {
  title: string;
  subTitle?: ISubTitle;
  header?: string;
}

export const TitleWithHeader = ({ title, subTitle, header }: IProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.1 }}
      w="full"
    >
      <Chakra.VStack
        textAlign={{ base: "center", md: "start" }}
        align={{ base: "center", md: "start" }}
        justifyContent={{ base: "center", md: "start" }}
        width="full"
        gap={2}
      >
        {subTitle ? (
          <Chakra.Text
            fontSize={{
              base: "4xl",
              sm: "5xl",
              md: "6xl",
              lg: "7xl",
            }}
            fontWeight="bold"
            color={subTitle.color}
            lineHeight="1"
            fontFamily="sans-serif"
            letterSpacing="6px"
          >
            {title}
            <br />
            <Chakra.Text
              as="span"
              backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
              bgClip="text"
              fontSize="6xl"
              fontWeight="extrabold"
              fontFamily="sans-serif"
              letterSpacing="6px"
            >
              {subTitle.title}
            </Chakra.Text>
          </Chakra.Text>
        ) : (
          <Chakra.Text
            as="span"
            backgroundGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
            bgClip="text"
            fontSize={{ base: "4xl", md: "6xl" }}
            fontWeight="extrabold"
            fontFamily="sans-serif"
            letterSpacing="6px"
          >
            {title}
          </Chakra.Text>
        )}
        <Chakra.Box
          w="80px"
          h="4px"
          bgGradient="linear-gradient(to right, #63B3ED, #9F7AEA)"
          borderRadius="full"
        />

        {header && (
          <Chakra.Text color={"#4A5568"} fontSize="lg">
            {header}
          </Chakra.Text>
        )}
      </Chakra.VStack>
    </MotionBox>
  );
};
