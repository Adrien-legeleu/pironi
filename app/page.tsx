import { Hero } from "@/components/hero";
import { ServicesSection } from "@/components/services-section";
import { HowItWorks } from "@/components/how-it-works";
import { TestimonialsSection } from "@/components/testimonials-section";
import { QuickContactSection } from "@/components/quick-contact-section";
import { QuoteFormSection } from "@/components/quote-form-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <TestimonialsSection />
      <QuickContactSection />
      <QuoteFormSection />
    </div>
  );
}
