import { ICategory } from "@/interfaces/ICategory";
import { ICategoryCount } from "@/interfaces/ICategoryCount";
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

  return (
    <Chakra.WrapItem>
      <Chakra.Button
        size="md"
        position="relative"
        px={6}
        py={3}
        border="1px solid"
        borderColor={isActive ? "transparent" : "rgba(255, 255, 255, 0.1)"}
        bg={
          isActive
            ? "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 212, 0.2))"
            : "rgba(255, 255, 255, 0.05)"
        }
        backdropFilter="blur(10px)"
        color={isActive ? "white" : "gray.300"}
        fontWeight={isActive ? "700" : "500"}
        borderRadius="full"
        overflow="hidden"
        _hover={{
          bg: isActive
            ? "linear-gradient(135deg, rgba(0, 212, 255, 0.3), rgba(255, 0, 212, 0.3))"
            : "rgba(255, 255, 255, 0.1)",
          borderColor: isActive ? "transparent" : "rgba(255, 255, 255, 0.2)",
          transform: "translateY(-2px)",
          shadow: isActive
            ? "0 10px 30px rgba(0, 212, 255, 0.3)"
            : "0 5px 20px rgba(255, 255, 255, 0.1)",
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
            bg={
              isActive ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"
            }
            color={isActive ? "white" : "gray.400"}
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
