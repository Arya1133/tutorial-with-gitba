import styles from './FeaturesSection.module.css';

const FeaturesSection = () => {
  return (
    <section className={styles.features}>
      <h2>Features</h2>
      <div className={styles.featureList}>
        <div className={styles.featureItem}>Feature 1</div>
        <div className={styles.featureItem}>Feature 2</div>
        <div className={styles.featureItem}>Feature 3</div>
      </div>
    </section>
  );
};

export default FeaturesSection;
