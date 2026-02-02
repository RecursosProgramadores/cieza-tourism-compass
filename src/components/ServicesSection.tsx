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
import ecoTourismImg from "@/assets/eco-tourism.jpg";
import sustainableImg from "@/assets/sustainable-architecture.jpg";
import marketingImg from "@/assets/marketing-digital.jpg";
import trainingImg from "@/assets/training-workshop.jpg";
import experienceImg from "@/assets/tourist-experience.jpg";

const services = [
  {
    id: "3.1",
    title: "Asesoría Técnica en Gestión Turística",
    subtitle: "Desarrollo Sostenible",
    description: "Diseñamos soluciones innovadoras que generan impacto positivo y duradero, promoviendo destinos más sostenibles y equitativos.",
    icon: Leaf,
    image: ecoTourismImg,
    color: "accent",
  },
  {
    id: "3.2",
    title: "Planificación Estratégica",
    subtitle: "Desarrollo Turístico Local",
    description: "Diseñamos planes de desarrollo turístico local, inventarios de recursos, estrategias de promoción e inversión.",
    icon: Target,
    image: sustainableImg,
    color: "secondary",
  },
  {
    id: "3.3",
    title: "Marketing & Comunicaciones",
    subtitle: "Visibilidad Sostenible",
    description: "Creamos campañas enfocadas en sostenibilidad para aumentar la visibilidad de servicios y productos turísticos.",
    icon: Megaphone,
    image: marketingImg,
    color: "primary",
  },
  {
    id: "3.4",
    title: "Diseño de Experiencias",
    subtitle: "Turismo Inmersivo",
    description: "Desarrollamos centros de interpretación, rutas turísticas y herramientas digitales para experiencias inmersivas.",
    icon: Compass,
    image: experienceImg,
    color: "secondary",
  },
  {
    id: "3.5",
    title: "Ecodiseño y Arquitectura",
    subtitle: "Infraestructura Sostenible",
    description: "Desarrollamos infraestructuras turísticas sostenibles con soluciones ecoeficientes que potencian la identidad del destino.",
    icon: Building2,
    image: sustainableImg,
    color: "accent",
  },
  {
    id: "3.6",
    title: "Turismo Emprende",
    subtitle: "Fondos Concursables",
    description: "Asesoría técnica para proyectos de fondos concursables. Más de 140 millones de soles destinados a 8,400+ beneficiarios.",
    icon: Rocket,
    image: trainingImg,
    color: "primary",
    highlight: true,
  },
  {
    id: "3.7",
    title: "Cursos y Capacitaciones",
    subtitle: "Formación Integral",
    description: "Empoderamos a emprendedores y profesionales con conocimientos de gestión de proyectos de turismo sostenible.",
    icon: GraduationCap,
    image: trainingImg,
    color: "secondary",
  },
  {
    id: "3.8",
    title: "Gestión de Información",
    subtitle: "Destinos Turísticos",
    description: "Gestión integral y optimización de puntos de información turística para proyectar la mejor imagen del destino.",
    icon: Info,
    image: experienceImg,
    color: "accent",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getColorClasses = (color: string, isHovered: boolean) => {
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
    <section id="servicios" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
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
            const colorClasses = getColorClasses(service.color, hoveredId === service.id);
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 ${
                  service.highlight ? "ring-2 ring-accent/50" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold ${colorClasses.badge}`}>
                      <service.icon className="w-3.5 h-3.5" />
                      {service.id}
                    </span>
                  </div>
                  
                  {service.highlight && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-accent text-accent-foreground text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                        Destacado
                      </span>
                    </div>
                  )}

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-secondary/90 text-xs font-semibold uppercase tracking-wider mb-1">
                      {service.subtitle}
                    </p>
                    <h3 className="font-bold text-primary-foreground text-lg leading-tight font-display">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <button 
                    className="flex items-center gap-2 text-secondary font-semibold text-sm group/btn"
                    onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Más información
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-soft hover:shadow-glow btn-shine group"
          >
            Solicitar Consultoría Personalizada
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}