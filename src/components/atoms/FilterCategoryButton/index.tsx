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
  return (
    <Chakra.WrapItem key={item}>
      <Chakra.Button
        size="sm"
        variant={activeFilter === item ? "solid" : "outline"}
        onClick={() => handleChangeActiveFilter(item)}
      >
        {item} ({categoryCounts[item] || 0})
      </Chakra.Button>
    </Chakra.WrapItem>
  );
};
