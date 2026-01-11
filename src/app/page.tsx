import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
