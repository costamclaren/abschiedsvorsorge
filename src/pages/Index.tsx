import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ProviderComparison from "@/components/ProviderComparison";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhySection />
      <ProviderComparison />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
