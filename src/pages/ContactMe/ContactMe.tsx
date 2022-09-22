import styles from "./ContactMe.module.css";

const ContactForm = () => {
  return (
    <form className={styles.form}>
      <h3>Contact form</h3>
      <input type="text" name="name" id="form_name" placeholder="Your name*" />
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
      <textarea
        name="message"
        id="form_message"
        rows={5}
        placeholder="Your message*"
      ></textarea>
      <button>Send message</button>
    </form>
  );
};

const ContactMe = () => {
  return (
    <section id="contact-me" className={styles.section}>
      <h2>Contact Me</h2>
      <ContactForm />
    </section>
  );
};

export default ContactMe;
