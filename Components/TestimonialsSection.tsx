import styles from './TestimonialsSection.module.css';

const TestimonialsSection = () => {
  return (
    <section className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles.testimonialList}>
        <div className={styles.testimonialItem}>User 1's feedback</div>
        <div className={styles.testimonialItem}>User 2's feedback</div>
        <div className={styles.testimonialItem}>User 3's feedback</div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
