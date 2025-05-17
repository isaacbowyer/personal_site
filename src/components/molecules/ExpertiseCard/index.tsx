import { motion } from "framer-motion";
import { ExpertiseTagContainer } from "@/components/organisms/ExpertiseTagContainer";
import { ExpertiseContentContainer } from "@/components/organisms/ExpertiseContentContainer";

interface IProps {
  index: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
  borderColor: string;
  isActive: boolean;
  onClick: () => void;
  tags: string[];
}

export const ExpertiseCard = ({
  index,
  title,
  description,
  icon,
  colorClass,
  borderColor,
  isActive,
  onClick,
  tags,
}: IProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={variants}
      layoutId={`card-container-${index}`}
      onClick={onClick}
      className={`expertise-card ${borderColor} ${
        isActive ? "expertise-card-active" : ""
      }`}
    >
      <motion.div
        className={`expertise-card-background ${colorClass}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="expertise-card-content">
        <motion.div
          className={`expertise-icon-container ${colorClass}`}
          layoutId={`card-icon-${index}`}
        >
          {icon}
        </motion.div>

        <div className="expertise-card-body">
          <ExpertiseContentContainer
            index={index}
            title={title}
            description={description}
          />

          {isActive && <ExpertiseTagContainer tags={tags} />}
        </div>
      </div>
    </motion.div>
  );
};
