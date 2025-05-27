import * as Chakra from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const pulse = keyframes`
  0% { opacity: 0.8 }
  50% { opacity: 0.3 }
  100% { opacity: 0.8 }
`;

const bounce = keyframes`
  0%, 20%, 53%, 80%, 100% {
    transform: translate3d(0,0,0);
  }
  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }
  70% {
    transform: translate3d(0, -15px, 0);
  }
  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-10px) rotate(1deg); }
  66% { transform: translateY(5px) rotate(-1deg); }
`;

export const CodeBackground = () => {
  const codeLines = [
    "const developer = {",
    "  name: 'Isaac Bowyer',",
    "  skills: ['TypeScript', 'React', 'Django'],",
    "  speciality: 'Creating seamless user experiences',",
    "  experience: 'Fullstack software development',",
    "  currentFocus: 'Cross-platform AI-integrated Apps'",
    "};",
    "",
    "const createApp =  () => {",
    "  return developer.skills.map(skill =>",
    "    buildUsing(skill)",
    "  );",
    "}",
    "",
    "// Always learning, always building",
    "const futureApp = createApp();",
    "",
    "export default developer;",
  ];

  return (
    <Chakra.Box
      position="absolute"
      inset="0"
      overflow="hidden"
      opacity="0.12"
      pointerEvents="none"
    >
      {/* Main code block */}
      <Chakra.Box
        position="absolute"
        top="10%"
        left="0"
        fontSize={{ base: "xs", md: "sm" }}
        fontFamily="mono"
        color="blue.300"
        animation={`${pulse} 4s infinite ease-in-out`}
        textShadow="0 0 10px rgba(59, 130, 246, 0.3)"
      >
        {codeLines.map((line, index) => (
          <Chakra.Box
            key={index}
            whiteSpace="pre"
            lineHeight="1.6"
            px="4"
            py="0.5"
            style={{
              animationDelay: `${index * 0.15}s`,
              animationDuration: "4s",
            }}
            _hover={{
              color: "blue.200",
              textShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              transition: "all 0.3s ease",
            }}
          >
            {line}
          </Chakra.Box>
        ))}
      </Chakra.Box>

      {/* Floating code elements */}
      <Chakra.Text
        position="absolute"
        top="50%"
        left="38%"
        fontSize={"md"}
        fontFamily="mono"
        color="green.300"
        opacity="0.7"
        animation={`${bounce} 3s infinite ease-in-out`}
        textShadow="0 0 8px rgba(34, 197, 94, 0.4)"
        fontWeight="bold"
        display={{ base: "none", md: "flex" }}
      >
        {"<developer />"}
      </Chakra.Text>

      <Chakra.Text
        position="absolute"
        top={{ base: "90%", md: "25%" }}
        right={{ base: "10%", md: "15%" }}
        fontSize={{ base: "sm", md: "md" }}
        fontFamily="mono"
        color="purple.300"
        opacity="0.7"
        animation={`${float} 4s infinite ease-in-out`}
        textShadow="0 0 8px rgba(147, 51, 234, 0.4)"
        fontWeight="bold"
      >
        {'{ code: "life" }'}
      </Chakra.Text>
    </Chakra.Box>
  );
};
