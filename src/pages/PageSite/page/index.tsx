import * as Chakra from "@chakra-ui/react";
import { TemplateContainer } from "@/components/templates/TemplateContainer";

export const Site = () => {
  return (
    <TemplateContainer
      main={
        <Chakra.VStack justifyContent="start" alignItems="start">
          <Chakra.VStack id="home">Home</Chakra.VStack>
          <Chakra.Text textAlign="start">Hello</Chakra.Text>
          <Chakra.Text>Hello</Chakra.Text>
          <Chakra.VStack id="expertise">Expertise</Chakra.VStack>
          <Chakra.Text>Hello</Chakra.Text>
          <Chakra.Text>Hello</Chakra.Text>
          <Chakra.VStack id="projects">Projects</Chakra.VStack>
          <Chakra.Text>Hello</Chakra.Text>
          <Chakra.Text>Hello</Chakra.Text>
          <Chakra.VStack id="work">Work</Chakra.VStack>
          <Chakra.Text>Hello</Chakra.Text>
          <Chakra.Text>Hello</Chakra.Text>
          <Chakra.VStack id="contact">Contact</Chakra.VStack>
        </Chakra.VStack>
      }
    />
  );
};
