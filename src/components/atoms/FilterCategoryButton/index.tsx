import { ICategory } from "@/interfaces/ICategory";
import { ICategoryCount } from "@/interfaces/ICategoryCount";
import { getFilterBtnBadgeStyles } from "@/utils/getFilterBtnBadgeStyles";
import { getFilterBtnStyles } from "@/utils/getFilterBtnStyles";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  item: ICategory;
  activeFilter: ICategory;
  categoryCounts: ICategoryCount;
  handleChangeActiveFilter: (item: ICategory) => void;
}

export const FilterCategoryButton = ({
  item,
  activeFilter,
  categoryCounts,
  handleChangeActiveFilter,
}: IProps) => {
  const isActive = activeFilter === item;

  const { normalState, hoverState } = getFilterBtnStyles(isActive);

  const { color, bgColor } = getFilterBtnBadgeStyles(isActive);
  return (
    <Chakra.WrapItem>
      <Chakra.Button
        size="md"
        position="relative"
        px={6}
        py={3}
        border="1px solid"
        borderColor={normalState.borderColor}
        bg={normalState.bgColor}
        backdropFilter="blur(10px)"
        color={normalState.color}
        fontWeight="bold"
        borderRadius="full"
        overflow="hidden"
        _hover={{
          bg: hoverState.bgColor,
          borderColor: hoverState.borderColor,
          transform: "translateY(-2px)",
          shadow: hoverState.shadow,
        }}
        _active={{
          transform: "translateY(0px)",
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        onClick={() => handleChangeActiveFilter(item)}
        _before={
          isActive
            ? {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(135deg, #00D4FF, #FF00D4)",
                borderRadius: "full",
                zIndex: -1,
                filter: "blur(8px)",
                opacity: 0.3,
              }
            : {}
        }
      >
        <Chakra.HStack gap={2}>
          <Chakra.Text fontSize="sm" fontWeight="inherit">
            {item}
          </Chakra.Text>
          <Chakra.Badge
            bg={bgColor}
            color={color}
            borderRadius="full"
            px={2}
            fontSize="xs"
            fontWeight="bold"
          >
            {categoryCounts[item] || 0}
          </Chakra.Badge>
        </Chakra.HStack>
      </Chakra.Button>
    </Chakra.WrapItem>
  );
};
