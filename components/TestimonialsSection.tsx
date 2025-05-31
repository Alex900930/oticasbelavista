"use client";

import Image from "next/image";
import { useState } from "react";
import { clientes } from "@/lib/constants";

export default function DepoimentosGallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <section id="depoimentos" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#040404] mb-4">
            Clientes satisfeitos
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Veja o que estão dizendo sobre nós no Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {clientes.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="cursor-pointer overflow-hidden rounded-xl shadow-md group"
            >
              <Image
                src={image}
                alt={`Depoimento ${index + 1}`}
                width={300}
                height={300}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-3xl w-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                ✕
              </button>
              <Image
                src={clientes[activeIndex]}
                alt={`Depoimento ampliado ${activeIndex + 1}`}
                width={800}
                height={800}
                className="object-contain w-full max-h-[90vh] rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
