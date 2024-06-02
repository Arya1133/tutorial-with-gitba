import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import GallerySection from '../components/GallerySection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My App</title>
        <meta name="description" content="Landing page for my app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroSection />
        <FeaturesSection />
        <GallerySection />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
