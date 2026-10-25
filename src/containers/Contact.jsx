import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { FaCircleCheck, FaCircleExclamation, FaSpinner } from "react-icons/fa6";
import { db } from "../config/firebase.config";
import Alert from "./Alert";
import { Reveal, SectionTitle } from "../components";
import { TridentGlyph } from "../components/HeroGlyphs";

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
    <section id="contact" className="my-20 w-full">
      {/* Alert */}
      <AnimatePresence>
        {alert.isAlert && (
          <Alert status={alert.status} message={alert.message} />
        )}
      </AnimatePresence>

      <div className="prose m-auto">
        <SectionTitle
          title="Let's Build Something Great"
          subtitle="Contact"
          glyph={<TridentGlyph />}
        />

        <p className="mt-2">
          Have a project in mind — web, mobile, or desktop — or need AI agent
          services? Tell me about it.
        </p>

        {/* main form */}
        <Reveal className="my-5 flex flex-col gap-5" amount={0.15}>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleTextChange}
              className="input"
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleTextChange}
              className="input"
            />
          </div>

          {/* Email field */}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleTextChange}
            className="input"
          />

          <textarea
            name="message"
            value={data.message}
            onChange={handleTextChange}
            placeholder="Your message"
            rows={6}
            className="input"
          />

          <div className="flex items-center lg:justify-end">
            <button
              className="btn-accent w-full justify-center px-4 py-2.5 disabled:opacity-70 disabled:cursor-not-allowed sm:w-auto"
              onClick={sendMessage}
              disabled={isSending}
            >
              {isSending ? "Sending Message..." : "Send Message"}
            </button>
          </div>

          {submitStatus.message && (
            <p
              className={`flex w-full items-center justify-center gap-2 text-sm lg:justify-end ${
                submitStatus.type === "success"
                  ? "text-[#3fb950]"
                  : submitStatus.type === "warning"
                  ? "text-[#d29922]"
                  : "text-[var(--fg)]"
              }`}
            >
              {submitStatus.type === "success" && (
                <FaCircleCheck aria-hidden="true" />
              )}
              {submitStatus.type === "warning" && (
                <FaCircleExclamation aria-hidden="true" />
              )}
              {submitStatus.type === "info" && (
                <FaSpinner className="animate-spin" aria-hidden="true" />
              )}
              {submitStatus.message}
            </p>
          )}
        </Reveal>

        <p>
          Or reach me directly at{" "}
          <code className="break-all">samsoorsamander@gmail.com</code>
          {" · "}
          <a className="font-mono" href="tel:+93764273409">+93 764 273 409</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
