import React from "react";
import { motion } from "framer-motion";

interface IProps {
  label: string;
}

export const CustomTag = ({ label }: IProps) => (
  <motion.span
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.2 }}
    className="skill-pill"
  >
    {label}
  </motion.span>
);
