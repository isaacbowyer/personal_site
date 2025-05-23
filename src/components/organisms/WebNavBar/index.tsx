import { CustomNavLink } from "@/components/atoms/CustomNavLink";
import { CustomLogo } from "@/components/molecules/CustomLogo";
import { LINKS } from "@/data/links";
import { theme } from "@/theme";
import { getCustomLinkColor } from "@/utils/getCustomLinkColor";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";

export const WebNavBar = () => {
  const [hoveredLabel, setHoveredLabel] = useState<string>("");

  return (
    <Chakra.HStack as="nav" w="full" alignItems="start" id="home">
      <Chakra.HStack w="full" justifyContent="space-between">
        <CustomLogo
          isHovered={hoveredLabel === "HOME"}
          onMouseEnter={() => setHoveredLabel("HOME")}
          onMouseLeave={() => setHoveredLabel("")}
        />

        <Chakra.HStack as="ul" listStyleType="none" gap={6}>
          {LINKS.NAV_BAR.map((link) => {
            return (
              <CustomNavLink
                key={link.label}
                href={link.href}
                label={link.label}
                color={getCustomLinkColor(hoveredLabel, link.label)}
                hoverColor={theme.colors.blue.vivid}
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
