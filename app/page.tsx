import Header from "@/components/layout/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FormSection from "@/components/FormSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      <main className="min-h-screen bg-gradient-to-b from-[#f5f5f5] to-[#e5e5e5]">
        <Header />
        <HeroSection />
        <BenefitsSection />
        <FormSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </ThemeProvider>
  );
}