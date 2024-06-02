import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Welcome to My App</h1>
        <p>Your app’s catchy headline goes here.</p>
        <div className={styles.buttons}>
          <button className={styles.primary}>Get Started</button>
          <button className={styles.secondary}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
