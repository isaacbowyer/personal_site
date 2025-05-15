import * as Chakra from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { links } from "@/data/links";
import { theme } from "@/theme";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CustomNavLink } from "@/components/atoms/CustomNavLink";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { getCustomLinkColor } from "@/utils/getCustomLinkColor";

const MotionVStack = motion(Chakra.VStack);
const MotionBox = motion(Chakra.Box);

export const MobileNavBar = () => {
  const { open: isOpen, onOpen, onClose } = useDisclosure();
  const [hoveredLabel, setHoveredLabel] = useState<string>("");

  return (
    <Chakra.Box position="relative" w="full" p={4}>
      <Chakra.HStack justifyContent="space-between" alignItems="center">
        <CustomNavLink
          href="#home"
          label={"SAAC"}
          hasImage
          color="black"
          hoverColor={theme.colors.black}
          onMouseEnter={() => setHoveredLabel("HOME")}
          onMouseLeave={() => setHoveredLabel("")}
          hasPointer={false}
        />

        <Chakra.IconButton
          aria-label="Toggle menu"
          onClick={isOpen ? onClose : onOpen}
          variant="ghost"
          size="lg"
        >
          {isOpen ? <IoClose size={24} /> : <RxHamburgerMenu size={24} />}
        </Chakra.IconButton>
      </Chakra.HStack>

      <AnimatePresence>
        {isOpen && (
          <MotionVStack
            as="nav"
            pos="absolute"
            top="90px"
            left={0}
            right={0}
            bg="white"
            shadow="md"
            p={4}
            gap={4}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            zIndex={10}
            borderRadius="md"
            transition={{ duration: 0.3 }}
          >
            {links.NAV_LINKS.map((link, index) => (
              <MotionBox
                key={link.label}
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{
                  delay: 0.4 + index * 0.1, // slower stagger
                  duration: 0.6, // slower animation
                  ease: "easeOut",
                }}
              >
                <CustomNavLink
                  href={link.href}
                  label={link.label}
                  color={getCustomLinkColor(hoveredLabel, link.label)}
                  hoverColor={theme.colors.blue}
                  shouldTransform={false}
                  onMouseEnter={() => setHoveredLabel(link.label)}
                  onMouseLeave={() => setHoveredLabel("")}
                />
              </MotionBox>
            ))}
          </MotionVStack>
        )}
      </AnimatePresence>
    </Chakra.Box>
  );
};
