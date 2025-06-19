import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { FaExternalLinkAlt } from "react-icons/fa";

// Sample data for certificates and awards
const CertificatesData = [
  {
    id: 1,
    name: "Front-End Development ",
    imgSrc: require("../assets/certificates/Front-End.png"),
    issuer: "Coursera",
    date: "March 2024",
    url: "https://coursera.org/share/f02e870acccc8f406642edafd9a4a060",
  },
  {
    id: 2,
    name: "HTML and CSS in depth ",
    imgSrc: require("../assets/certificates/HTML and CSS.png"),
    issuer: "Coursera",
    date: "Jun 2024",
    url: "https://coursera.org/share/03a81623e19311993681480e4e75bb22",
  },
  {
    id: 3,
    name: "JavaScript ",
    imgSrc: require("../assets/certificates/JavaScript.png"),
    issuer: "Coursera",
    date: "Fab 2024",
    url: "https://coursera.org/share/a3795588b499e20da2ba02a6a93e714b",
  },
  {
    id: 4,
    name: "React Basics ",
    imgSrc: require("../assets/certificates/React basic.png"),
    issuer: "Coursera",
    date: "May 2024",
    url: "https://coursera.org/share/3591ff317f93603e332aefa5cc5ffacb",
  },
  {
    id: 5,
    name: "React Native ",
    imgSrc: require("../assets/certificates/React Native.png"),
    issuer: "Coursera",
    date: "Nov 2024",
    url: "https://coursera.org/share/27a53196a52bb3741581995d108264b8",
  },
  // Add more certificates/awards as needed
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Certificates
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <AnimatePresence>
          {CertificatesData &&
            CertificatesData.map((certificate) => (
              <div className="rounded max-w-400 max-h-100">
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              </div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const CertificateCard = ({ certificate }) => {
  const [isHoverred, setIsHoverred] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHoverred(true)}
      onMouseLeave={() => setIsHoverred(false)}
      className="overflow-hidden cursor-pointer relative rounded-md"
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        className="w-full h-full object-contain rounded-lg border border-gray-700"
        src={certificate.imgSrc}
        alt={certificate.name}
      />

      {isHoverred && (
        <motion.div
          className="absolute inset-0 
          backdrop-blur-md bg-[rgba(0,0,0,0.6)] 
          flex items-center justify-center flex-col gap-2 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <p className="text-xl font-medium text-primary">{certificate.name}</p>
          <p className="text-sm text-texlight">
            Issued by: {certificate.issuer}
          </p>
          <p className="text-sm text-texlight">Date: {certificate.date}</p>
          <a
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 mt-2 text-white hover:text-primary transition-all"
          >
            <span>View Certificate</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Certificates;
