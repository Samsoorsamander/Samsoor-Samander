import React from "react";
import { motion } from "framer-motion";

const Alert = ({ status, message }) => {
  const statusConfig = {
    success: {
      barColor: "bg-[#3fb950]",
      textColor: "text-[#3fb950]",
    },
    warning: {
      barColor: "bg-[#d29922]",
      textColor: "text-[#d29922]",
    },
    danger: {
      barColor: "bg-[#f85149]",
      textColor: "text-[#f85149]",
    },
  };

  const config = statusConfig[status] || statusConfig.warning;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="panel fixed left-1/2 top-4 z-[100] -translate-x-1/2 w-[92vw] max-w-xl overflow-hidden rounded-md px-3 py-3 sm:left-auto sm:right-6 sm:w-auto sm:translate-x-0"
    >
      <p className={config.textColor}>{message}</p>
      <div className="absolute inset-x-0 bottom-0 h-1 bg-[#8883]">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          exit={{ width: 0 }}
          transition={{ duration: 4, delay: 0.5 }}
          className={`h-full ${config.barColor}`}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Alert;
