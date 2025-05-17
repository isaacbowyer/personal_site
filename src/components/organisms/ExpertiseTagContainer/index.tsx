import { CustomTag } from "@/components/atoms/CustomTag";
import { motion } from "framer-motion";

interface IProps {
  tags: string[];
}

export const ExpertiseTagContainer = ({ tags }: IProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="expertise-skills"
    >
      <div className="expertise-skills-grid">
        {tags.map((tag, index) => (
          <CustomTag key={index} label={tag} />
        ))}
      </div>
    </motion.div>
  );
};
