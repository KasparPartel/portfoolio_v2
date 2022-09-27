import { Fragment, useRef, useState } from "react";
import styles from "./ContactMe.module.css";

import emailIcon from "../../assets/images/icon_email.svg";
import phoneIcon from "../../assets/images/icon_phone.svg";
import * as React from "react";

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

const ContactForm = () => {
  const form = useRef();
  // const [form, setForm] = useState<{
  //   user_name: string;
  //   user_email: string;
  //   subject: string;
  //   message: string;
  // }>({ user_name: "", user_email: "", subject: "", message: "" });

  // const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const name = e.currentTarget.name;
  //   setForm({ ...form, [name]: e.currentTarget.value });
  // };

  // const handleTextAreaChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
  //   const name = e.currentTarget.name;
  //   setForm({ ...form, [name]: e.currentTarget.value });
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <Fragment>
      <h3>Contact form</h3>
      <form
        ref={form}
        onSubmit={(e) => handleSubmit(e)}
        className={styles.form}
      >
        <div className={styles.form_grid_1}>
          <input
            type="text"
            name="user_name"
            id="form_name"
            placeholder="Your name*"
            // onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="user_email"
            id="form_email"
            placeholder="Your email*"
            // onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="subject"
            id="form_subject"
            placeholder="Subject*"
            // onChange={handleInputChange}
            required
          />
        </div>
        <div className={styles.form_grid_2}>
          <textarea
            name="message"
            id="form_message"
            rows={5}
            placeholder="Your message*"
            // onChange={handleTextAreaChange}
            required
          ></textarea>
          <button>Send message</button>
        </div>
      </form>
    </Fragment>
  );
};

const ContactMe = () => {
  return (
    <section id="contact-me" className={styles.section}>
      <h2>Contact Me</h2>
      <div className={styles.cards}>
        <ContactCard
          img={emailIcon}
          imgAlt="email icon"
          text="kasparjohannes@gmail.com"
        />
        <ContactCard img={phoneIcon} imgAlt="phone icon" text="+37255962987" />
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactMe;
