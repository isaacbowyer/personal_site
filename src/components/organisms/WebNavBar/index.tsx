import { CustomNavLink } from "@/components/atoms/CustomNavLink";
import { links } from "@/data/links";
import { theme } from "@/theme";
import { getCustomLinkColor } from "@/utils/getCustomLinkColor";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";

export const WebNavBar = () => {
  const [hoveredLabel, setHoveredLabel] = useState<string>("");

  return (
    <Chakra.HStack
      as="nav"
      w="full"
      justifyContent="space-between"
      marginBottom="8"
    >
      <CustomNavLink
        href="#home"
        label={"SAAC"}
        hasImage
        color={getCustomLinkColor(hoveredLabel, "HOME")}
        hoverColor={theme.colors.blue}
        onMouseEnter={() => setHoveredLabel("HOME")}
        onMouseLeave={() => setHoveredLabel("")}
      />

      <Chakra.HStack as="ul" listStyleType="none" p={4} gap={6}>
        {links.NAV_LINKS.map((link) => {
          return (
            <CustomNavLink
              key={link.label}
              href={link.href}
              label={link.label}
              color={getCustomLinkColor(hoveredLabel, link.label)}
              hoverColor={theme.colors.blue}
              onMouseEnter={() => setHoveredLabel(link.label)}
              onMouseLeave={() => setHoveredLabel("")}
            />
          );
        })}
      </Chakra.HStack>
    </Chakra.HStack>
  );
};
