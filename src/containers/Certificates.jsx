import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { SectionTitle } from "../components";

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
      className="flex items-center justify-center flex-col gap-12 my-16"
    >
      <SectionTitle title="Certificates" subtitle="Achievements" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {CertificatesData &&
          CertificatesData.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
      </div>
    </section>
  );
};

const CertificateCard = ({ certificate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8 }}
      className="overflow-hidden cursor-pointer relative rounded-2xl glass-card border border-white/10"
    >
      <motion.img
        whileHover={{ scale: 1.03 }}
        className="w-full h-[220px] object-cover rounded-t-2xl"
        src={certificate.imgSrc}
        alt={certificate.name}
      />
      <div className="p-4 text-left">
        <p className="text-lg font-medium text-white">{certificate.name}</p>
        <p className="text-sm text-texlight">Issued by: {certificate.issuer}</p>
        <p className="text-sm text-texlight">Date: {certificate.date}</p>
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-3 text-primary hover:text-secondary transition-all"
        >
          <span>View Certificate</span>
          <FaExternalLinkAlt className="text-sm" />
        </a>
      </div>
    </motion.div>
  );
};

export default Certificates;
