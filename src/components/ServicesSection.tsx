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
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ecoTourismImg from "@/assets/eco-tourism.jpg";
import sustainableImg from "@/assets/sustainable-architecture.jpg";
import marketingImg from "@/assets/marketing-digital.jpg";
import trainingImg from "@/assets/training-workshop.jpg";
import experienceImg from "@/assets/tourist-experience.jpg";

const services = [
  {
    id: "3.1",
    title: "Asesoría Técnica en Gestión Turística y Desarrollo Sostenible",
    description:
      "El turismo sostenible depende de un equilibrio entre desarrollo, conservación y bienestar social. Aquí diseñamos soluciones innovadoras que generan impacto positivo y duradero, promoviendo destinos más sostenibles y equitativos.",
    icon: Leaf,
    image: ecoTourismImg,
    color: "accent",
  },
  {
    id: "3.2",
    title: "Planificación Estratégica",
    description:
      "Diseñamos planes de desarrollo turístico local, inventarios de recursos, estrategias de promoción e inversión.",
    icon: Target,
    image: sustainableImg,
    color: "secondary",
  },
  {
    id: "3.3",
    title: "Marketing & Comunicaciones",
    description:
      "Creamos campañas enfocadas en sostenibilidad para aumentar la visibilidad de servicios y productos turísticos en los diferentes formatos y medios de comunicación.",
    icon: Megaphone,
    image: marketingImg,
    color: "primary",
  },
  {
    id: "3.4",
    title: "Diseño de Experiencias Turísticas",
    description:
      "Desarrollamos centros de interpretación, rutas turísticas, señalética y herramientas digitales para conectar a los visitantes con el patrimonio cultural y natural, creando experiencias inmersivas e interactivas en los destinos.",
    icon: Compass,
    image: experienceImg,
    color: "secondary",
  },
  {
    id: "3.5",
    title: "Ecodiseño y Arquitectura",
    description:
      "Desarrollamos infraestructuras turísticas sostenibles, incluyendo hoteles, centros de visitantes y equipamiento ecológico, integrando soluciones ecoeficientes que potencian la identidad y revalorizan los destinos.",
    icon: Building2,
    image: sustainableImg,
    color: "accent",
  },
  {
    id: "3.6",
    title: "Turismo Emprende",
    description:
      "Asesoría de proyectos de FONDOS CONCURSABLES. A través de la consultoría brindamos soporte técnico turístico para promover la creación y desarrollo de la reactivación turística.",
    icon: Rocket,
    image: trainingImg,
    color: "primary",
    highlight: true,
    extraInfo:
      "Desde el 2017 al 2024, el Mincetur ha realizado once ediciones de 'Turismo Emprende', alcanzando más de 25 mil emprendedores y destinando más de 140 millones de soles a favor de más de 8,400 beneficiarios a nivel nacional.",
  },
  {
    id: "3.7",
    title: "Cursos y Capacitaciones",
    description:
      "Empoderamos a emprendedores y profesionales con conocimientos de gestión de proyectos de turismo, inspirando el desarrollo INTEGRAL del turismo sostenible.",
    icon: GraduationCap,
    image: trainingImg,
    color: "secondary",
    courses: [
      "Marketing y Transformación Digital",
      "Tiendas Virtuales para Agencias de Viajes",
      "Estrategia de Ventas Empresariales",
      "Recursos Humanos para Empresas Turísticas",
      "Constitución de Empresas Turísticas",
    ],
  },
  {
    id: "3.8",
    title: "Gestión de la Información Turística de Destinos",
    description:
      "La información turística en los destinos es un pilar fundamental para la imagen que se proyecta hacia los visitantes.",
    icon: Info,
    image: experienceImg,
    color: "accent",
    bulletPoints: [
      "Servicio de atención y asesoramiento a visitantes",
      "Diseño e implantación de protocolos de trabajo",
      "Estudio de la demanda",
      "Gestión de distintivos de calidad",
      "Generación de contenidos y promoción",
      "Sensibilización y dinamización a los agentes locales",
    ],
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="servicios" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            Soluciones Integrales en Turismo
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos un portafolio completo de servicios para impulsar el desarrollo 
            turístico sostenible en Perú
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 ${
                service.highlight ? "ring-2 ring-accent" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold ${
                      service.color === "accent"
                        ? "bg-accent text-accent-foreground"
                        : service.color === "secondary"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    <service.icon className="w-4 h-4" />
                    {service.id}
                  </span>
                </div>
                {service.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
                      DESTACADO
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-primary text-lg mb-3 line-clamp-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Extra Info */}
                {(service.extraInfo || service.courses || service.bulletPoints) && (
                  <div>
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="flex items-center gap-2 text-secondary font-medium text-sm hover:text-secondary/80 transition-colors"
                    >
                      {expandedId === service.id ? "Ver menos" : "Ver más"}
                      {expandedId === service.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>

                    {expandedId === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t border-border"
                      >
                        {service.extraInfo && (
                          <p className="text-sm text-foreground/80 leading-relaxed">
                            {service.extraInfo}
                          </p>
                        )}
                        {service.courses && (
                          <ul className="space-y-2">
                            {service.courses.map((course) => (
                              <li
                                key={course}
                                className="flex items-start gap-2 text-sm text-foreground/80"
                              >
                                <span className="text-accent mt-1">•</span>
                                {course}
                              </li>
                            ))}
                          </ul>
                        )}
                        {service.bulletPoints && (
                          <ul className="space-y-2">
                            {service.bulletPoints.map((point) => (
                              <li
                                key={point}
                                className="flex items-start gap-2 text-sm text-foreground/80"
                              >
                                <span className="text-secondary mt-1">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-4 rounded-lg transition-colors shadow-soft"
          >
            Solicitar Consultoría Personalizada
          </a>
        </motion.div>
      </div>
    </section>
  );
}