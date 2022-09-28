import * as React from "react";
import { Fragment, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactMe.module.css";

import emailIcon from "../../assets/images/icon_email.svg";
import phoneIcon from "../../assets/images/icon_phone.svg";

interface ContactCardProps {
  img: string;
  imgAlt: string;
  text: string;
}

const ContactCard = ({ img, imgAlt, text }: ContactCardProps) => {
  return (
    <div className={styles.card}>
      <img src={img} alt={imgAlt} />
      <p>{text}</p>
    </div>
  );
};

interface ContactFormProps {
  setMsg: (s: string) => void;
}

const ContactForm = ({ setMsg }: ContactFormProps) => {
  const form = useRef();

  // const validateFormData = (form: React.MutableRefObject<undefined>) => {
  //   const name = form.current;
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm("portfolio", "contact_form", form.current, "oYwwWZJ4rUcwiGbjE")
      .then(
        () => {
          setMsg("Message sent");
        },
        () => {
          setMsg("Something went wrong");
        }
      );
  };

  return (
    <Fragment>
      <h3>Contact form</h3>
      <form ref={form} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.form_grid_1}>
          <input
            type="text"
            name="user_name"
            id="form_name"
            placeholder="Your name*"
            pattern="[A-Za-z]+"
            required
          />
          <input
            type="email"
            name="user_email"
            id="form_email"
            placeholder="Your email*"
            required
          />
          <input
            type="text"
            name="subject"
            id="form_subject"
            placeholder="Subject*"
            required
          />
        </div>
        <div className={styles.form_grid_2}>
          <textarea
            name="message"
            id="form_message"
            rows={5}
            placeholder="Your message*"
            required
          ></textarea>
          <button>Send message</button>
        </div>
      </form>
    </Fragment>
  );
};

const ContactMe = () => {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setMsg(""), 4000);
    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <section id="contact-me" className={styles.section}>
      <h2>Contact Me</h2>
      <div className={styles.cards}>
        <ContactCard
          img={emailIcon}
          imgAlt="email icon"
          text="kasparjohannespartel@gmail.com"
        />
        <ContactCard img={phoneIcon} imgAlt="phone icon" text="+37255962987" />
      </div>
      <ContactForm setMsg={setMsg} />
      <p style={{ textAlign: "center", paddingTop: "1em", fontWeight: 700 }}>
        {msg}
      </p>
    </section>
  );
};

export default ContactMe;
