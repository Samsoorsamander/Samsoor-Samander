import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { FaCircleCheck, FaCircleExclamation, FaSpinner } from "react-icons/fa6";
import { db } from "../config/firebase.config";
import Alert from "./Alert";
import { SectionTitle } from "../components";

import emailjs from "emailjs-com";

const RECEIVER_EMAIL = "samsoorsamander@gmail.com";
const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    isAlert: false,
    message: "",
    status: null,
  });
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    message: "",
    type: "idle",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessage = async () => {
    if (isSending) return;

    if (!data.email || !data.message) {
      setAlert({
        isAlert: true,
        message: "Required fields cannot be empty",
        status: "warning",
      });
      setSubmitStatus({
        message: "Please enter your email and message before sending.",
        type: "warning",
      });
      setTimeout(
        () => setAlert({ isAlert: false, message: "", status: null }),
        4000
      );
      return;
    }

    try {
      setIsSending(true);
      setSubmitStatus({
        message: "Sending your message...",
        type: "info",
      });

      // Store in Firestore
      await addDoc(collection(db, "messages"), { ...data });

      // Send email via EmailJS
      await emailjs.send(
        "samsoorID",
        "template_rwsdu7z",
        {
          to_email: RECEIVER_EMAIL,
          from_first: data.firstName,
          from_last: data.lastName,
          from_email: data.email,
          reply_to: data.email,
          message: data.message,
        },
        "LbagokLMED6e5BBFc"
      );

      setAlert({
        isAlert: true,
        message:
          "Thanks for contacting me! Your message has been sent to my inbox.",
        status: "success",
      });
      setSubmitStatus({
        message: "Message sent successfully to samsoorsamander@gmail.com.",
        type: "success",
      });

      setTimeout(
        () => setAlert({ isAlert: false, message: "", status: null }),
        4000
      );
      setData({ firstName: "", lastName: "", email: "", message: "" });
    } catch (error) {
      // If EmailJS fails, open user's email client so the message can still reach inbox.
      const mailtoSubject = encodeURIComponent(
        `Portfolio Contact: ${data.firstName} ${data.lastName}`.trim()
      );
      const mailtoBody = encodeURIComponent(
        `From: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\n\n${data.message}`
      );
      window.location.href = `mailto:${RECEIVER_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;

      setAlert({
        isAlert: true,
        message:
          "Email service failed, so we opened your email app to send the message directly.",
        status: "warning",
      });
      setSubmitStatus({
        message:
          "Automatic send failed. Your email app was opened so you can send directly.",
        type: "warning",
      });
      setTimeout(
        () => setAlert({ isAlert: false, message: "", status: null }),
        4000
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-12 my-16"
    >
      {/* Alert */}
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>

      <SectionTitle title="Let's Build Something Great" subtitle="Contact" />

      {/* main content */}
      <div
        className="w-full flex flex-col items-center justify-start gap-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="w-full lg:w-[680px] p-4 sm:p-6 flex flex-col items-center justify-start gap-4 glass-card rounded-3xl border border-white/10"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleTextChange}
              className="w-full px-4 py-3 rounded-md border border-white/20 bg-black/25 focus:border-primary outline-none text-white transition-colors"
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleTextChange}
              className="w-full px-4 py-3 rounded-md border border-white/20 bg-black/25 focus:border-primary outline-none text-white transition-colors"
            />
          </div>
          {/* Email field */}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleTextChange}
            className="w-full px-4 py-3 rounded-md border border-white/20 bg-black/25 focus:border-primary outline-none text-white transition-colors"
          />

          <textarea
            name="message"
            value={data.message}
            onChange={handleTextChange}
            placeholder="Your message"
            id=""
            cols="0"
            rows="10"
            className="w-full px-4 py-3 rounded-md border border-white/20 bg-black/25 focus:border-primary outline-none text-white transition-colors"
          ></textarea>
          <div
            className="w-full flex items-center justify-center
           lg:justify-end"
          >
            <button
              className="px-12 py-3 bg-gradient-to-br from-primary to-secondary rounded-md w-full lg:w-auto hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/25 duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              onClick={sendMessage}
              disabled={isSending}
            >
              {isSending ? "Sending Message..." : "Send Message"}
            </button>
          </div>
          {submitStatus.message && (
            <p
              className={`w-full text-sm text-center lg:text-right flex items-center justify-center lg:justify-end gap-2 ${
                submitStatus.type === "success"
                  ? "text-primary"
                  : submitStatus.type === "warning"
                  ? "text-yellow-300"
                  : "text-gray-300"
              }`}
            >
              {submitStatus.type === "success" && (
                <FaCircleCheck className="text-primary" aria-hidden="true" />
              )}
              {submitStatus.type === "warning" && (
                <FaCircleExclamation
                  className="text-yellow-300"
                  aria-hidden="true"
                />
              )}
              {submitStatus.type === "info" && (
                <FaSpinner className="animate-spin" aria-hidden="true" />
              )}
              {submitStatus.message}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
