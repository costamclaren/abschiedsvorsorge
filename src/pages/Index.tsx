import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import BestattungskostenRechner from "@/components/BestattungskostenRechner";
import ProviderComparison from "@/components/ProviderComparison";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhySection />
      <BestattungskostenRechner />
      <ProviderComparison />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
