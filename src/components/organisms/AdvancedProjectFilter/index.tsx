import { FilterCategoryButton } from "@/components/atoms/FilterCategoryButton";
import { ICategory } from "@/interfaces/ICategory";
import { ICategoryCount } from "@/interfaces/ICategoryCount";
import * as Chakra from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionVStack = motion.create(Chakra.VStack);
const MotionBox = motion.create(Chakra.Box);

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
    <MotionVStack
      w="full"
      align="start"
      gap={6}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Chakra.Text
        fontSize={{ base: "lg", md: "xl" }}
        fontWeight="700"
        color="white"
        letterSpacing="1px"
        textTransform="uppercase"
        width="full"
        textAlign={{ base: "center", md: "start" }}
      >
        Filter Projects
      </Chakra.Text>

      <Chakra.Wrap gap={3} justify={{ base: "center", md: "start" }} w="full">
        {categories.map((cat, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FilterCategoryButton
              item={cat}
              categoryCounts={categoryCounts}
              activeFilter={activeFilter}
              handleChangeActiveFilter={handleChangeActiveFilter}
            />
          </MotionBox>
        ))}
      </Chakra.Wrap>
    </MotionVStack>
  );
};
