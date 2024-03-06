import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMessage, setNewMessage] = useState("");

  // State variables for validation
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateInputs = () => {
    let isValid = true;
    if (!newName.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }
    if (!newEmail.trim() || !isValidEmail(newEmail)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }
    if (!newMessage.trim()) {
      setMessageError("Message is required");
      isValid = false;
    } else {
      setMessageError("");
    }
    return isValid;
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (validateInputs()) {
      const formData = {
        name: newName,
        email: newEmail,
        message: newMessage,
        access_key: "3e11fe9c-8319-4062-bc92-80c30b9962bc",
      };
      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (data.success) {
          console.log("Success", data);
          setSubmitted(true);
          setNewName("");
          setNewEmail("");
          setNewMessage("");
        } else {
          console.error("Error submitting form:", data);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const variants = {
    initial: { scale: 1 },
    animate: {
      scale: 0.5,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        ease: "easeOut",
        duration: 0.2,
      },
    },
  };

  const { t } = useTranslation();

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={submitted ? "animate" : "initial"}
      className="bg-transparent h-fit w-fit rounded-lg backdrop-brightness-[.80]"
    >
      <div
        className={` w-full h-full flex flex-col p-10 gap-5 justify-center items-center ${
          submitted ? "" : "hidden"
        }`}
      >
        <CheckCircle size={150} color="white" />{" "}
        <button
          onClick={() => setSubmitted(false)}
          className=" bg-primary w-fit h-fit p-5 rounded-lg text-white text-3xl"
        >
          {t("Send another one")}
        </button>
      </div>

      <form
        className={`flex flex-col gap-5 p-5 h-full ${
          submitted ? "hidden" : ""
        }`}
        onSubmit={onSubmit}
      >
        <div className="flex gap-5 flex-col sm:flex-row justify-between">
          <div className="flex flex-col">
            {nameError && <p className="text-red-500">{nameError}</p>}
            <input
              placeholder={t("Name...")}
              className="p-2 sm:p-3 focus:outline-none rounded-md w-full transition-all 
              duration-1000 ease-in-out delay-500 "
              type="text"
              name="name"
              value={newName}
              onChange={(event) => {
                setNewName(event.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            {emailError && <p className="text-red-500">{emailError}</p>}

            <input
              placeholder={t("Email...")}
              className="p-2 sm:p-3 focus:outline-none rounded-md w-full"
              type="email"
              name="email"
              value={newEmail}
              onChange={(event) => {
                setNewEmail(event.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          {messageError && (
            <p
              className="text-red-500 transition-all 
          duration-1000 ease-in-out delay-500"
            >
              {messageError}
            </p>
          )}

          <textarea
            placeholder={t("Message...")}
            className="p-2 sm:p-3 focus:outline-none rounded-md h-full"
            name="message"
            value={newMessage}
            onChange={(event) => {
              setNewMessage(event.target.value);
            }}
            rows="3"
          />
        </div>
        <button
          className="bg-primary p-2 py-4 text-white  text-xl font-medium rounded-md hover:bg-[#1582B3] transition-all ease-out delay-0"
          type="submit"
        >
          {t("Send")}
        </button>
      </form>
    </motion.div>
  );
}

export default Form;
