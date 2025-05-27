"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="#hero" className="flex items-center">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.name}
              width={350}
              height={100}
              className="md:h-24 h-12 w-auto rounded-lg transition-transform duration-300 hover:scale-105"
              priority
              loading="eager"
              draggable="false"
              unoptimized
              fetchPriority="high"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 ">
              <li>
                <Link
                  href="#beneficios"
                  className="text-[#040404] hover:text-[#dd541f] transition-colors font-medium"
                >
                  Benefícios
                </Link>
              </li>
              <li>
                <Link
                  href="#galeria"
                  className="text-[#040404] hover:text-[#dd541f] transition-colors font-medium"
                >
                  Galeria
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="text-[#040404] hover:text-[#dd541f] transition-colors font-medium"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-[#040404] hover:text-[#dd541f] transition-colors font-medium"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href="#agendar"
            className="hidden md:block bg-[#dd541f] hover:bg-[#c04014] text-white font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Agendar Exame
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#040404]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      {/* Mobile Navigation */}
{isOpen && (
  <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50 py-4 px-4"> {/* Adicionadas classes aqui */}
    <ul className="flex flex-col space-y-4">
      <li>
        <Link
          href="#beneficios"
          className="block text-[#040404] hover:text-[#dd541f] transition-colors font-medium"
          onClick={() => setIsOpen(false)}
        >
          Benefícios
        </Link>
      </li>
      <li>
        <Link
          href="#galeria"
          className="block text-[#040404] hover:text-[#dd541f] transition-colors font-medium"
          onClick={() => setIsOpen(false)}
        >
          Galeria
        </Link>
      </li>
      <li>
        <Link
          href="#depoimentos"
          className="block text-[#040404] hover:text-[#dd541f] transition-colors font-medium"
          onClick={() => setIsOpen(false)}
        >
          Depoimentos
        </Link>
      </li>
      <li>
        <Link
          href="#contato"
          className="block text-[#040404] hover:text-[#dd541f] transition-colors font-medium"
          onClick={() => setIsOpen(false)}
        >
          Contato
        </Link>
      </li>
      <li>
        <Link
          href="#agendar"
          className="block bg-[#dd541f] text-white font-bold py-2 px-4 rounded-full text-center"
          onClick={() => setIsOpen(false)}
        >
          Agendar Exame
        </Link>
      </li>
    </ul>
  </div>
)}
      </div>
    </header>
  );
}