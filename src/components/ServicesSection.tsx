import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Leaf,
  Target,
  Megaphone,
  Compass,
  Building2,
  Rocket,
  GraduationCap,
  Info,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import s1 from "@/assets/servicios/servicio1.jpeg";
import s2 from "@/assets/servicios/servicio2.jpeg";
import s3 from "@/assets/servicios/servicio3.jpeg";
import s4 from "@/assets/servicios/servicio4.jpeg";
import s5 from "@/assets/servicios/servicio5.jpeg";
import s6 from "@/assets/servicios/servicio6.jpeg";
import s7 from "@/assets/servicios/servicio7.jpeg";
import s8 from "@/assets/servicios/servicio8.jpeg";

const services = [
  {
    title: "Asesoría Técnica en Gestión Turística",
    subtitle: "Desarrollo Sostenible",
    description: "Diseñamos soluciones innovadoras que generan impacto positivo y duradero, promoviendo destinos más sostenibles y equitativos.",
    icon: Leaf,
    image: s1,
    color: "accent",
  },
  {
    title: "Planificación Estratégica",
    subtitle: "Desarrollo Turístico Local",
    description: "Diseñamos planes de desarrollo turístico local, inventarios de recursos, estrategias de promoción e inversión.",
    icon: Target,
    image: s2,
    color: "secondary",
  },
  {
    title: "Marketing & Comunicaciones",
    subtitle: "Visibilidad Sostenible",
    description: "Creamos campañas enfocadas en sostenibilidad para aumentar la visibilidad de servicios y productos turísticos.",
    icon: Megaphone,
    image: s3,
    color: "primary",
  },
  {
    title: "Diseño de Experiencias",
    subtitle: "Turismo Inmersivo",
    description: "Desarrollamos centros de interpretación, rutas turísticas y herramientas digitales para experiencias inmersivas.",
    icon: Compass,
    image: s4,
    color: "secondary",
  },
  {
    title: "Ecodiseño y Arquitectura",
    subtitle: "Infraestructura Sostenible",
    description: "Desarrollamos infraestructuras turísticas sostenibles con soluciones ecoeficientes que potencian la identidad del destino.",
    icon: Building2,
    image: s5,
    color: "accent",
  },
  {
    title: "Turismo Emprende",
    subtitle: "Fondos Concursables",
    description: "Asesoría técnica para proyectos de fondos concursables. Más de 140 millones de soles destinados a 8,400+ beneficiarios.",
    icon: Rocket,
    image: s6,
    color: "primary",
    highlight: true,
  },
  {
    title: "Cursos y Capacitaciones",
    subtitle: "Formación Integral",
    description: "Empoderamos a emprendedores y profesionales con conocimientos de gestión de proyectos de turismo sostenible.",
    icon: GraduationCap,
    image: s7,
    color: "secondary",
  },
  {
    title: "Gestión de Información",
    subtitle: "Destinos Turísticos",
    description: "Gestión integral y optimización de puntos de información turística para proyectar la mejor imagen del destino.",
    icon: Info,
    image: s8,
    color: "accent",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleWhatsAppClick = (serviceTitle?: string) => {
    const message = serviceTitle
      ? encodeURIComponent(`Hola Yesenia, estoy interesado en el servicio: ${serviceTitle}`)
      : encodeURIComponent("Hola Yesenia, me interesa solicitar una consultoría personalizada");
    window.open(`https://wa.me/51943254265?text=${message}`, "_blank");
  };

  const getColorClasses = (color: string) => {
    const colors = {
      accent: {
        badge: "bg-accent text-accent-foreground",
        hover: "group-hover:bg-accent",
      },
      secondary: {
        badge: "bg-secondary text-secondary-foreground",
        hover: "group-hover:bg-secondary",
      },
      primary: {
        badge: "bg-primary text-primary-foreground",
        hover: "group-hover:bg-primary",
      },
    };
    return colors[color as keyof typeof colors] || colors.primary;
  };

  return (
    <section id="servicios" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background decoration - More LIFE and COLOR */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-3 mb-6 font-display">
            Soluciones Integrales
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Portafolio completo de servicios para impulsar el desarrollo turístico sostenible en Perú
          </p>
          <div className="section-divider mt-8" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(service.title)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 border border-white/5 ${service.highlight ? "ring-2 ring-accent/50" : ""
                  }`}
              >
                {/* Image Container - No overlay ("cortina") */}
                <div className="relative h-60 overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`inline-flex items-center justify-center w-10 h-10 rounded-full shadow-elevated border border-white/20 ${colorClasses.badge}`}>
                      <service.icon className="w-5 h-5" />
                    </span>
                  </div>

                  {service.highlight && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-accent text-accent-foreground text-[10px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider shadow-elevated border border-white/20">
                        Destacado
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Area - Professional Text Placement */}
                <div className="p-8">
                  <div className="mb-5">
                    <p className="text-[#176ddd] font-black text-[10px] uppercase tracking-[0.25em] mb-2 drop-shadow-sm">
                      {service.subtitle}
                    </p>
                    <h3 className="font-black text-primary text-2xl leading-tight font-display group-hover:text-[#176ddd] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-primary/70 text-[15px] leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <button
                    className="flex items-center gap-2 text-secondary font-black text-sm group/btn relative overflow-hidden pb-1"
                    onClick={() => handleWhatsAppClick(service.title)}
                  >
                    <span className="relative z-10">Solicitar Consultoría</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA - Centered and Animated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <button
            onClick={() => handleWhatsAppClick()}
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg rounded-2xl shadow-glow-accent transition-all duration-300 hover:scale-105 active:scale-95 font-bold group"
          >
            Solicitar Consultoría Personalizada
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}