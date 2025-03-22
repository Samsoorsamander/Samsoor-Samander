import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Alert = ({ status, message }) => {
  const statusConfig = {
    success: {
      bgColor: "bg-primary",
      borderColor: "border-primary",
      textColor: "text-primary",
    },
    warinnig: {
      bgColor: "bg-yellow-400",
      borderColor: "border-yellow-400",
      textColor: "text-yellow-400",
    },
    danger: {
      bgColor: "bg-red-400",
      borderColor: "border-red-400",
      textColor: "text-red-400",
    },
  };

  const config = statusConfig[status];

  return (
    <motion.div
      className={`fixed top-12 right-12 px-3 py-3 rounded-md border ${config.borderColor} w-auto overflow-hidden backdrop-blur-md`}
    ></motion.div>
  );
};

export default Alert;
