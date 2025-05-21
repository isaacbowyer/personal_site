import { FilterCategoryButton } from "@/components/atoms/FilterCategoryButton";
import { ICategory } from "@/interfaces/ICategory";
import { ICategoryCount } from "@/interfaces/ICategoryCount";
import * as Chakra from "@chakra-ui/react";

interface IProps {
  categories: ICategory[];
  activeFilter: ICategory;
  categoryCounts: ICategoryCount;
  handleChangeActiveFilter: (category: ICategory) => void;
}
export const AdvancedProjectFilter = ({
  categories,
  activeFilter,
  categoryCounts,
  handleChangeActiveFilter,
}: IProps) => {
  return (
    <Chakra.VStack w="full" align="start" gap={2}>
      <Chakra.Text
        fontWeight="bold"
        w="full"
        textAlign={{ base: "center", md: "left" }}
      >
        Filter By:
      </Chakra.Text>

      <Chakra.Wrap gap={2} justify={{ base: "center", md: "start" }} w="full">
        {categories.map((cat, index) => (
          <FilterCategoryButton
            key={index}
            item={cat}
            categoryCounts={categoryCounts}
            activeFilter={activeFilter}
            handleChangeActiveFilter={handleChangeActiveFilter}
          />
        ))}
      </Chakra.Wrap>
    </Chakra.VStack>
  );
};
