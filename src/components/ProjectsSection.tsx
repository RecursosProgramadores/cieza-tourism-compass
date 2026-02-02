import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Building2, ExternalLink, CheckCircle } from "lucide-react";

const projects = [
  {
    title: "Especialista en Difusión y Sensibilización Turística",
    company: "GUZMÁN ARTISTAS PROFESIONALES E.I.R.L.",
    client: "GORE LA LIBERTAD",
    year: "2025",
    description: "Elaboración del Expediente Técnico 'Los Balsares de Huanchaco' CUI N° 2664887",
    location: "La Libertad",
    current: true,
  },
  {
    title: "Evaluador de Expediente Técnico Turístico",
    company: "AREVALO PEZO JEIGER HOMERO",
    client: "GORE LA LIBERTAD",
    year: "2025",
    description: "Evaluación del Expediente Técnico Turístico Calipuy - Santuario Nacional de Guanacos",
    location: "La Libertad",
    current: true,
  },
  {
    title: "Asesora Turística Hotelera",
    company: "Hotel Vuelo 78",
    client: "",
    year: "2023",
    description: "Desarrollo de estrategia turística hotelera integral",
    location: "Lima",
  },
  {
    title: "Especialista de Rutas Turísticas",
    company: "Proyecto Amazonas",
    client: "",
    year: "2024",
    description: "Desarrollo de plan turístico para la región amazónica",
    location: "Iquitos",
  },
  {
    title: "Asesora Turística Municipal",
    company: "Municipalidad de La Banda de Shilcayo",
    client: "",
    year: "2021",
    description: "Elaboración de PDTL - Plan de Desarrollo Local Turístico",
    location: "San Martín",
  },
  {
    title: "Sub Gerencia de Promoción Turística",
    company: "Municipalidad Provincial San Martín",
    client: "",
    year: "2020",
    description: "Funcionaria Pública encargada de proyectos turísticos",
    location: "Tarapoto",
  },
  {
    title: "Especialista en Turismo Internacional",
    company: "INNOVA TRAINING E INTERPRISE SAC",
    client: "",
    year: "2018-2020",
    description: "Desarrollo de proyectos turísticos en Ecuador y Bolivia",
    location: "Internacional",
  },
];

const trustedBy = [
  "MINCETUR",
  "GORE San Martín",
  "GORE Loreto",
  "GORE La Libertad",
  "Cámara de Comercio SM",
  "UNSM",
  "Municipalidad La Banda",
  "Municipalidad San Martín",
  "PROMPERÚ",
  "CANATUR",
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            Trayectoria Profesional
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-3 mb-6 font-display">
            Proyectos Desarrollados
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title + project.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`card-premium p-6 relative ${
                project.current ? "ring-2 ring-accent/40" : ""
              }`}
            >
              {project.current && (
                <div className="absolute -top-3 right-4">
                  <span className="bg-accent text-accent-foreground text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-soft">
                    Actual
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1.5 text-secondary font-bold text-sm bg-secondary/10 px-3 py-1.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground text-xs">
                  <MapPin className="w-3 h-3" />
                  {project.location}
                </span>
              </div>
              
              <h3 className="font-bold text-primary text-lg mb-2 font-display leading-tight">
                {project.title}
              </h3>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span className="line-clamp-1">{project.company}</span>
              </div>
              
              {project.client && (
                <div className="flex items-center gap-2 text-secondary text-sm mb-3">
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  <span>{project.client}</span>
                </div>
              )}
              
              <p className="text-foreground/70 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-3 font-display">
            Confiaron en Nosotros
          </h3>
          <p className="text-muted-foreground text-sm mb-10">
            Instituciones públicas y privadas que respaldan nuestra trayectoria
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {trustedBy.map((org, index) => (
              <motion.div
                key={org}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.04 }}
                className="flex items-center gap-2 px-5 py-3 bg-muted/60 rounded-xl border border-border hover:border-secondary/30 hover:bg-secondary/5 transition-all duration-300 group"
              >
                <CheckCircle className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-muted-foreground text-sm font-medium group-hover:text-foreground transition-colors">
                  {org}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}