import styles from './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section className={styles.contact}>
      <h2>Contact</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;
