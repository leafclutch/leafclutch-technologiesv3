import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      {/* <FeaturedProjects /> */}
      {/* <Testimonials /> */}
      <CTASection />
    </Layout>
  );
};

export default Index;
