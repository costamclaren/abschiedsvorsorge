import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <TeamSection showLink={false} />
      </div>
      <Footer />
    </div>
  );
};

export default Team;
