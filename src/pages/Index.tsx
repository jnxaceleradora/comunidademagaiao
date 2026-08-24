import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OfferSection from "@/components/OfferSection";
import SolutionSection from "@/components/SolutionSection";
import ContentsSection from "@/components/ContentsSection";
import MaterialShowcaseSection from "@/components/MaterialShowcaseSection";
import AuthoritySection from "@/components/AuthoritySection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import BenefitsSection from "@/components/BenefitsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="pt-16">
      <Header />
      <HeroSection />
      <SolutionSection />
      <OfferSection />
      <ContentsSection />
      <MaterialShowcaseSection />
      <AuthoritySection />
      <AudienceSection />
      <BenefitsSection />
      <CTASection />
      <GuaranteeSection />
      <FooterSection />
    </main>
  );
};

export default Index;
