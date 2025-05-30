import { BreadcrumChevron } from "@/components/atoms/BreadcrumChevron";
import { IBreadcrumbItem } from "@/interfaces/IBreadcrumItem";
import { validateOptionsBasedOnBoolean } from "@/utils/validateOptionsBasedOnBoolean";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  items: IBreadcrumbItem[];
}

export const Breadcrumbs = ({ items }: IProps) => {
  return (
    <Chakra.HStack gap={4} fontSize="sm" align="center">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const textColor = validateOptionsBasedOnBoolean(
          isLast,
          "#FFF",
          "rgba(255, 255, 255, 0.7)"
        );
        const fontWeight = validateOptionsBasedOnBoolean(
          isLast,
          "bold",
          "normal"
        );

        return (
          <>
            {item.href && !isLast ? (
              <Chakra.Link
                href={item.href}
                color="rgba(255, 255, 255, 0.7)"
                _hover={{ color: "#FFF", textDecoration: "underline" }}
                _focus={{ outline: "none", boxShadow: "none" }}
                transition="color 0.2s"
              >
                {item.label}
              </Chakra.Link>
            ) : (
              <Chakra.Text color={textColor} fontWeight={fontWeight}>
                {item.label}
              </Chakra.Text>
            )}

            {!isLast && <BreadcrumChevron />}
          </>
        );
      })}
    </Chakra.HStack>
  );
};
