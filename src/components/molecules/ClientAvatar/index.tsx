import { getInitials } from "@/utils/getInitals";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  name: string;
  role: string;
}
export const ClientAvatar = ({ name, role }: IProps) => {
  const clientInitals = getInitials(name);
  return (
    <Chakra.Flex
      align="center"
      justify="center"
      gap={4}
      direction={{ base: "column", md: "row" }}
    >
      <Chakra.Center
        w={{ base: "60px", md: "80px" }}
        h={{ base: "60px", md: "80px" }}
        borderRadius="50%"
        background="#f8f9fa"
        fontSize={{ base: "xl", md: "2xl" }}
        fontWeight="bold"
        color="#77C7FF"
      >
        {clientInitals}
      </Chakra.Center>

      <Chakra.Box textAlign={{ base: "center", md: "start" }} gap={2}>
        <Chakra.Text as="h3" fontSize="xl" fontWeight="bold">
          {name}
        </Chakra.Text>
        <Chakra.Text color="#94a3b8" fontSize="lg">
          {role}
        </Chakra.Text>
      </Chakra.Box>
    </Chakra.Flex>
  );
};
