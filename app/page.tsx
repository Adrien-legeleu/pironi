import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { HowItWorks } from "@/components/how-it-works";
import { ValuesSection } from "@/components/values-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { QuoteFormSection } from "@/components/quote-form-section";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <ValuesSection />
      <TestimonialsSection />
      <QuoteFormSection />
    </div>
  );
}
