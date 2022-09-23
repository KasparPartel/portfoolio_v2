import { Fragment } from "react";
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
const ContactForm = () => {
  return (
    <Fragment>
      <h3>Contact form</h3>
      <form className={styles.form}>
        <div className={styles.form_grid_1}>
          <input
            type="text"
            name="name"
            id="form_name"
            placeholder="Your name*"
          />
          <input
            type="email"
            name="email"
            id="form_email"
            placeholder="Your email*"
          />
          <input
            type="text"
            name="subject"
            id="form_subject"
            placeholder="Subject*"
          />
        </div>
        <div className={styles.form_grid_2}>
          <textarea
            name="message"
            id="form_message"
            rows={5}
            placeholder="Your message*"
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
