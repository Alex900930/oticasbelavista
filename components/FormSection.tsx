"use client";

import { useState } from "react";
import { Calendar, Clock, Phone, User, Mail, MessageSquare } from "lucide-react";
import { siteConfig } from "@/lib/constants";

export default function FormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault(); // Impede o recarregamento da página

  // 1. Constrói a mensagem para o WhatsApp
  // Use %0A para quebrar a linha no WhatsApp
 const message = `Olá, Ópticas Bela Vista!

Gostaria de agendar um exame.
Nome: ${formData.name}
Telefone: ${formData.phone}
Data preferida: ${formData.date}
Hora preferida: ${formData.time}

Aguardando confirmação!`;
  // 2. Formata o número de telefone
  // O link do WhatsApp precisa apenas dos dígitos do telefone.
  // siteConfig.phone deve ser algo como "(85) 91234-5678"
  const phoneNumber = siteConfig.phone.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

  // 3. Cria o link do WhatsApp
  const whatsappLink = `https://wa.me/55${phoneNumber}?text=${encodeURIComponent(message)}`;

  // 4. Abre o WhatsApp em uma nova aba
  window.open(whatsappLink, "_blank");

  // Opcional: Exibe a mensagem de sucesso OU redireciona
  setIsSubmitted(true);

  // Opcional: Limpar o formulário após o envio
  setFormData({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });
};
  
  return (
    <section id="agendar" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-[#dd541f] p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Agende seu exame de vista grátis</h2>
              <p className="mb-6">
                Preencha o formulário e nossa equipe entrará em contato para confirmar seu agendamento.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-3" />
                  <span>Horários de Segunda à Sábado</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-3" />
                  <span>Das 8h às 17h</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>Confirmação por telefone</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <h3 className="font-semibold mb-2">Importante</h3>
                <p className="text-sm">
                  Seu exame será realizado por profissionais qualificados e pode durar entre 30 e 45 minutos.
                </p>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8">
              {isSubmitted ? (
               <div className="h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#040404] mb-2">Agendamento Recebido!</h3>
                  <p className="text-gray-600 text-center mb-4">
                    Entraremos em contato por telefone para confirmar seu exame.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[#dd541f] hover:text-[#c04014] font-medium"
                  >
                    Fazer outro agendamento
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-xl font-bold text-[#040404] mb-6">
                    Preencha seus dados
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">
                        Nome completo
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#dd541f] focus:border-transparent"
                          placeholder="Seu nome"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="phone">
                        Telefone
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#dd541f] focus:border-transparent"
                          placeholder="(00) 00000-0000"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">
                      E-mail
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#dd541f] focus:border-transparent"
                        placeholder="seu.email@exemplo.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="date">
                        Data preferencial
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#dd541f] focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="time">
                        Horário preferencial
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="time"
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#dd541f] focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">
                      Observações (opcional)
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                        <MessageSquare className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={3}
                        className="pl-10 w-full border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#dd541f] focus:border-transparent"
                        placeholder="Alguma informação adicional importante?"
                      ></textarea>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-[#dd541f] hover:bg-[#c04014] text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md"
                  >
                    GARANTIR MEU EXAME GRÁTIS
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}