import { CustomNavLink } from "@/components/atoms/CustomNavLink";
import { links } from "@/data/links";
import { theme } from "@/theme";
import { getCustomLinkColor } from "@/utils/getCustomLinkColor";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";

export const WebNavBar = () => {
  const [hoveredLabel, setHoveredLabel] = useState<string>("");

  return (
    <Chakra.HStack as="nav" w="full" alignItems="start">
      <Chakra.HStack w="full" justifyContent="space-between">
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

        <Chakra.HStack as="ul" listStyleType="none" gap={6}>
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
                shouldTransform
              />
            );
          })}
        </Chakra.HStack>
      </Chakra.HStack>
    </Chakra.HStack>
  );
};
