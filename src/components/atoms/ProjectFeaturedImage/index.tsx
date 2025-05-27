import * as Chakra from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

interface IProps {
  imageUrl: string;
}

const imageFloat = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const ProjectFeaturedImage = ({ imageUrl }: IProps) => {
  return (
    <Chakra.VStack
      display={{ base: "none", lg: "flex" }}
      align="center"
      justify="center"
    >
      <Chakra.Image
        src={imageUrl}
        height="550px"
        transition="transform 0.3s ease"
        animation={`${imageFloat} 4s ease-in-out infinite`}
      />
    </Chakra.VStack>
  );
};
