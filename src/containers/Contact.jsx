import React, { useState } from "react";
import { Leaf1, Leaf2 } from "../assets";
import { AnimatePresence, motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebase.config";
import Alert from "./Alert";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const sendMessage = async () => {
    if (data.email === "" || data.email === null) {
      alert("Please enter your email address");
      return;
    } else {
      try {
        await addDoc(collection(db, "messages"), {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          message: data.message,
        });
        alert("Message Sent Successfully");
        setData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section
      id="contact"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* Alert */}
      <Alert status={"success"} />
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
            Contact Me
          </p>
          <img src={Leaf2} className="w-6 h-auto object-contain" alt="" />
        </motion.div>
      </div>

      {/* main content */}
      <div
        className=" w-full flex flex-col items-center justify-start
      gap-4"
      >
        <div
          className="w-full lg:w-[600px] p-2 flex flex-col
        items-center justify-start gap-4
        "
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleTextChange}
              style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
              className="w-full px-4 py-3 rounded-md border
            border-[rgba(225,255,255,0.3)] bg-transparent 
            focus:border-primary outline-none text-white
            "
            />

            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleTextChange}
              style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
              className="w-full px-4 py-3 rounded-md border
            border-[rgba(225,255,255,0.3)] bg-transparent 
            focus:border-primary outline-none text-white
            "
            />
          </div>
          {/* Email field */}
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={handleTextChange}
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
            className="w-full px-4 py-3 rounded-md border
            border-[rgba(225,255,255,0.3)] bg-transparent 
            focus:border-primary outline-none text-white
            "
          />

          <textarea
            name="message"
            value={data.message}
            onChange={handleTextChange}
            placeholder="Message here"
            id=""
            cols="0"
            rows="10"
            style={{ boxShadow: "inset 0px 0px 10px rgba(255,255,255,0.3)" }}
            className="w-full px-4 py-3 rounded-md border
            border-[rgba(225,255,255,0.3)] bg-transparent 
            focus:border-primary outline-none text-white
            "
          ></textarea>
          <div
            className="w-full flex items-center justify-center
           lg:justify-end"
          >
            <button
              className="px-12 py-3 bg-gradient-to-br
            from-primary to-secondary rounded-md w-full
            lg:w-auto hover:bg-gradient-to-br hover:from-black
            hover:to-black hover:border hover:border-primary 
            hover:text-primary duration-200

            "
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
