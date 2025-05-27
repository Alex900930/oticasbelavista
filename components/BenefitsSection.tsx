import { benefits } from "@/lib/constants";
import { 
  Glasses, 
  Eye, 
  Gift, 
  BadgeCheck 
} from "lucide-react";

export default function BenefitsSection() {
  const iconMap = {
    "glasses": Glasses,
    "eye": Eye,
    "gift": Gift,
    "badge-check": BadgeCheck,
  };
  
  return (
    <section id="beneficios" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#040404] mb-4">
            Por que escolher nossa promoção?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos condições exclusivas para você cuidar da sua visão com qualidade e preço justo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap];
            
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-md transition-transform hover:transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-[#dd541f]/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {IconComponent && (
                    <IconComponent 
                      className="h-8 w-8 text-[#dd541f]" 
                    />
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#040404] mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}