"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function WhatsAppButton() {
  const phoneNumber = siteConfig.phone.replace(/\D/g, "");
  const message = encodeURIComponent("Olá! acessei o site de vocês para agendar um exame de vista. Poderia me ajudar?");
  const whatsappUrl = `https://wa.me/55${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2 group"
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out">
        Fale Conosco
      </span>
    </a>
  );
}