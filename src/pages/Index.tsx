import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import QuotationSection from "@/components/QuotationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import AboutSection from "@/components/AboutSection";
import NewlyAddedSection from "@/components/NewlyAddedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <NewlyAddedSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
      <AboutSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
