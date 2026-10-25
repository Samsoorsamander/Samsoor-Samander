import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

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
];

// Any part of the site can open this modal with:
// window.dispatchEvent(new Event("open-certificates"));
const CertificatesModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const open = () => setIsOpen(true);
    window.addEventListener("open-certificates", open);
    return () => window.removeEventListener("open-certificates", open);
  }, []);

  // Lock page scroll while open and close on Escape.
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const onKey = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-center justify-center bg-[#000000aa] p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            className="panel relative max-h-full w-full max-w-4xl overflow-y-auto rounded-md p-5 sm:p-8"
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => event.stopPropagation()}
          >
            {/* header */}
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <p className="op50 text-sm">Achievements</p>
                <h2 className="font-script mt-1 text-3xl text-[var(--fg-deeper)]">
                  Certificates
                </h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close certificates"
                className="back-top shrink-0"
              >
                <FaTimes />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CertificatesData.map((certificate) => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const CertificateCard = ({ certificate }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      className="bd overflow-hidden rounded-md"
    >
      <img
        className="h-[200px] w-full object-cover opacity-90"
        src={certificate.imgSrc}
        alt={certificate.name}
      />
      <div className="p-4 text-left">
        <p className="text-[var(--fg-deep)]">
          <b>{certificate.name}</b>
        </p>
        <p className="text-sm op75">
          {certificate.issuer} · {certificate.date}
        </p>
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-[var(--fg-deeper)] hover:underline"
        >
          <span>View Certificate</span>
          <FaExternalLinkAlt className="text-xs" />
        </a>
      </div>
    </motion.div>
  );
};

export default CertificatesModal;
