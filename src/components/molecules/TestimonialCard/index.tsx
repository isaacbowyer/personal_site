import * as Chakra from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { ClientAvatar } from "../ClientAvatar";

const cardFloat = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
`;

interface IProps {
  comment: string;
  clientName: string;
  clientRole: string;
}

export const TestimonialCard = ({
  comment,
  clientName,
  clientRole,
}: IProps) => {
  return (
    <Chakra.Box
      w="full"
      bg="rgba(69, 69, 69, 0.05)"
      backdropFilter="blur(20px)"
      border="1px solid rgba(255, 255, 255, 0.1)"
      borderRadius="24px"
      p={{ base: "40px 30px", md: "60px 50px" }}
      position="relative"
      overflow="hidden"
      animation={`${cardFloat} 6s ease-in-out infinite`}
    >
      <Chakra.Text
        fontSize="4rem"
        color="#77C7FF"
        lineHeight="1"
        mb="20px"
        animation={`${pulse} 2s ease-in-out infinite`}
        position="relative"
        zIndex={1}
      >
        &quot;
      </Chakra.Text>

      <Chakra.Text
        fontSize={{ base: "1.2rem", md: "1.5rem" }}
        lineHeight="4xl"
        mb={16}
        fontStyle="italic"
        textAlign="center"
      >
        {comment}
      </Chakra.Text>

      <ClientAvatar name={clientName} role={clientRole} />
    </Chakra.Box>
  );
};
