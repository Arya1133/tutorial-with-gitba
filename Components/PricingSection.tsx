import styles from './PricingSection.module.css';

const PricingSection = () => {
  return (
    <section className={styles.pricing}>
      <h2>Pricing</h2>
      <div className={styles.pricingTable}>
        <div className={styles.pricingPlan}>Plan 1</div>
        <div className={styles.pricingPlan}>Plan 2</div>
        <div className={styles.pricingPlan}>Plan 3</div>
      </div>
    </section>
  );
};

export default PricingSection;
