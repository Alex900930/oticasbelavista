import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-12">
            <div className="inline-block bg-[#dd541f] text-white px-4 py-1 rounded-full text-sm font-bold mb-6 animate-pulse">
              {siteConfig.promoTag}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040404] leading-tight mb-6">
              {siteConfig.mainHeadline}
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              {siteConfig.subHeadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#agendar"
                className="bg-[#dd541f] hover:bg-[#c04014] text-white font-bold py-3 px-8 rounded-full text-center transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                {siteConfig.ctaText}
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#beneficios"
                className="bg-white hover:bg-gray-100 text-[#040404] font-semibold py-3 px-8 rounded-full text-center border border-gray-300 transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/BannerSiteOtica1.jpg"
                alt="Mulher feliz com óculos novos"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <p className="text-white font-semibold text-lg">
                  Promoção por tempo limitado!
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <div className="flex items-center gap-2">
                <div className="bg-[#dd541f] text-white rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                  R$
                </div>
                <div>
                  <p className="text-gray-600 text-sm">A partir de</p>
                  <p className="text-[#040404] font-bold text-2xl">39,90</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}