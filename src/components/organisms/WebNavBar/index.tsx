import { CustomNavLink } from "@/components/atoms/CustomNavLink";
import { CustomLogo } from "@/components/molecules/CustomLogo";
import { LINKS } from "@/data/links";
import { theme } from "@/theme";
import { getCustomLinkColor } from "@/utils/getCustomLinkColor";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";
import { useState } from "react";

interface IProps {
  isLightMode?: boolean;
}

export const WebNavBar = ({ isLightMode = false }: IProps) => {
  const [hoveredLabel, setHoveredLabel] = useState<string>("");

  const hoverColor = validateOptionsBasedOnBoolean(
    isLightMode,
    " #D1D1D1",
    " #707070"
  );

  return (
    <Chakra.HStack as="nav" w="full" alignItems="start">
      <Chakra.HStack w="full" justifyContent="space-between">
        <CustomLogo
          isHovered={hoveredLabel === "HOME"}
          onMouseEnter={() => setHoveredLabel("HOME")}
          onMouseLeave={() => setHoveredLabel("")}
          isLightMode
        />

        <Chakra.HStack as="ul" listStyleType="none" gap={6}>
          {LINKS.NAV_BAR.map((link) => {
            return (
              <CustomNavLink
                key={link.label}
                href={link.href}
                label={link.label}
                color={getCustomLinkColor({
                  hoverColor: hoverColor,
                  color: "#FFF",
                  label: link.label,
                  hoveredLabel: hoveredLabel,
                })}
                hoverColor={theme.colors.blue.light}
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
