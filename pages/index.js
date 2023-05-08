import Hero from "@/components/organisms/Hero";
import FeaturedSection from "@/components/organisms/FeaturedSection";
import BenefitsSection from "@/components/organisms/BenefitsSection";
import WhyUsSection from "@/components/organisms/WhyusSection";
import Questions from "@/components/organisms/QuestionsSection";
import FooterSection from "@/components/organisms/FooterSEction";
import TechWeUse from "@/components/organisms/TechWeUseSection";
import { StyledHomePage } from "@/styles/HomepageStyles";
export default function Home() {
  return (
    <StyledHomePage>
      <Hero />
      <FeaturedSection />
      <WhyUsSection />
      <BenefitsSection />
      <TechWeUse />
      <Questions />
      <FooterSection />
    </StyledHomePage>
  );
}
