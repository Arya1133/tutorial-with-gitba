import styles from './GallerySection.module.css';

const GallerySection = () => {
  return (
    <section className={styles.gallery}>
      <h2>Gallery</h2>
      <div className={styles.galleryGrid}>
        <div className={styles.galleryItem}>Screenshot 1</div>
        <div className={styles.galleryItem}>Screenshot 2</div>
        <div className={styles.galleryItem}>Screenshot 3</div>
      </div>
    </section>
  );
};

export default GallerySection;
