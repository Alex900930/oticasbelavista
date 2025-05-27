"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { gallery } from "@/lib/constants";

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateImage = (direction: number) => {
    let newIndex = activeImageIndex + direction;
    if (newIndex < 0) newIndex = gallery.length - 1;
    if (newIndex >= gallery.length) newIndex = 0;
    setActiveImageIndex(newIndex);
  };

  return (
    <section id="galeria" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#040404] mb-4">
            Galeria de Armações
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubra modelos modernos e elegantes que se adaptam ao seu estilo e personalidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-xl group cursor-pointer shadow-md transition-all hover:shadow-xl"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-w-4 aspect-h-3 relative">
                <Image 
                  src={image} 
                  alt={`Modelo de óculos ${index + 1}`} 
                  width={400} 
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 text-white">
                  <p className="font-semibold">Modelo Exclusivo</p>
                  <p className="text-sm">Disponível na nossa loja</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button 
              className="absolute top-4 right-4 text-white hover:text-[#dd541f] transition-colors"
              onClick={closeLightbox}
            >
              <X className="h-8 w-8" />
            </button>
            
            <div className="max-w-4xl w-full">
              <div className="relative aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <Image
                  src={gallery[activeImageIndex]}
                  alt={`Modelo de óculos ${activeImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full"
                />
              </div>
              
              <div className="flex justify-between mt-4">
                <button 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                  onClick={() => navigateImage(-1)}
                >
                  Anterior
                </button>
                <button 
                  className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
                  onClick={() => navigateImage(1)}
                >
                  Próximo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}