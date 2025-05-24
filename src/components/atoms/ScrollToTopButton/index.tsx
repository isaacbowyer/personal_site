import React, { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { IconButton } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionIconButton = motion(IconButton);

interface ScrollToTopButtonProps {
  scrollContainer: React.RefObject<HTMLDivElement | null>;
}

export const ScrollToTopButton = ({
  scrollContainer,
}: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = scrollContainer.current;

    if (!container) return;

    const toggleVisibility = () => {
      if (container.scrollTop > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    container.addEventListener("scroll", toggleVisibility);

    toggleVisibility();

    return () => container.removeEventListener("scroll", toggleVisibility);
  }, [scrollContainer]);

  const scrollToTop = () => {
    const homeElement = document.getElementById("home");
    if (homeElement) {
      homeElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MotionIconButton
          aria-label="Scroll to top"
          onClick={scrollToTop}
          position="fixed"
          bottom="24px"
          right="24px"
          zIndex={50}
          borderRadius="full"
          color="white"
          boxShadow="lg"
          bgGradient="linear-gradient(to bottom right, #3b82f6, #22d3ee)"
          boxSize="50px"
          initial={{ opacity: 0, y: 80, scale: 0.5, rotate: 180 }}
          animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
          exit={{ opacity: 0, y: 80, scale: 0.5, rotate: 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FiArrowUp size="md" />
        </MotionIconButton>
      )}
    </AnimatePresence>
  );
};
