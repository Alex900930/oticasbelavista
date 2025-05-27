import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#040404] mb-4">
            Entre em Contato
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas ou agende seu exame por telefone.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 shadow-md">
              <h3 className="text-xl font-bold text-[#040404] mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#dd541f]/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-[#dd541f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#040404] mb-1">Endereço</h4>
                    <p className="text-gray-600">{siteConfig.address}</p>
                    <a 
                      href="https://maps.google.com/?cid=4497324622348214523" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#dd541f] hover:text-[#c04014] text-sm font-medium mt-1 inline-block"
                    >
                      Ver no mapa
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#dd541f]/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-[#dd541f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#040404] mb-1">Telefone</h4>
                    <p className="text-gray-600">{siteConfig.phone}</p>
                    <a 
                      href={`tel:${siteConfig.phone.replace(/[^0-9]/g, '')}`} 
                      className="text-[#dd541f] hover:text-[#c04014] text-sm font-medium mt-1 inline-block"
                    >
                      Ligar agora
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#dd541f]/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-[#dd541f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#040404] mb-1">E-mail</h4>
                    <p className="text-gray-600">{siteConfig.email}</p>
                    <a 
                      href={`mailto:${siteConfig.email}`} 
                      className="text-[#dd541f] hover:text-[#c04014] text-sm font-medium mt-1 inline-block"
                    >
                      Enviar e-mail
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#dd541f]/10 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6 text-[#dd541f]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#040404] mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">{siteConfig.openHours}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md h-[400px] md:h-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31797.889087253414!2d-39.3298244871644!3d-4.354628795627483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bf6c79013dda5b%3A0x6eb7eaadfd7b0a75!2sCanind%C3%A9%2C%20CE%2C%20Brazil!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link
            href="#agendar"
            className="inline-block bg-[#dd541f] hover:bg-[#c04014] text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            Agende Seu Exame Grátis
          </Link>
        </div>
      </div>
    </section>
  );
}