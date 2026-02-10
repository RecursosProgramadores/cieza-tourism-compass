import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Building2, ExternalLink, CheckCircle } from "lucide-react";

import logo1 from "@/assets/logos/CANATUR.jpg";
import logo2 from "@/assets/logos/GOBIERNOREGIONALORETO.jpg";
import logo3 from "@/assets/logos/GOBIERNOREGIONALLIBERTAD.png";
import logo4 from "@/assets/logos/GOBIERNOREGIONALSANMARTIN.png";
import logo5 from "@/assets/logos/MINISTERIODETURISMO.jpg";
import logo6 from "@/assets/logos/MUNICIPALIDADDELABANDADESHILCAYO.jpg";
import logo7 from "@/assets/logos/SANMARTIN.png";
import logo8 from "@/assets/logos/comerciosanmartin.png";

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

const clientLogos = [
  { src: logo1, name: "CANATUR" },
  { src: logo2, name: "GORE Loreto" },
  { src: logo3, name: "GORE La Libertad" },
  { src: logo4, name: "GORE San Martín" },
  { src: logo5, name: "MINCETUR" },
  { src: logo6, name: "Municipalidad La Banda" },
  { src: logo7, name: "San Martín" },
  { src: logo8, name: "Cámara de Comercio" },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Duplicar logos para el efecto infinito
  const duplicatedLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section id="proyectos" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration - More LIFE and COLOR */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full dot-pattern opacity-30 pointer-events-none" />

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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title + project.year}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`card-premium p-6 relative ${project.current ? "ring-2 ring-accent/40" : ""
                }`}
            >
              {project.current && (
                <div className="absolute -top-4 right-6">
                  <span className="bg-gradient-vibrant text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-glow-accent">
                    Actual
                  </span>
                </div>
              )}

              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center gap-2 text-secondary font-black text-xs bg-secondary/10 px-4 py-2 rounded-full tracking-wider uppercase">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground text-xs font-bold uppercase tracking-tighter">
                  <MapPin className="w-3.5 h-3.5 text-secondary/60" />
                  {project.location}
                </span>
              </div>

              <h3 className="font-black text-primary text-xl mb-3 font-display leading-tight group-hover:text-secondary transition-colors duration-300">
                {project.title}
              </h3>

              <div className="flex items-center gap-2 text-primary/70 text-[13px] font-bold mb-4">
                <Building2 className="w-4 h-4 flex-shrink-0 text-secondary" />
                <span className="line-clamp-1">{project.company}</span>
              </div>

              {project.client && (
                <div className="flex items-center gap-2 text-secondary text-sm mb-3">
                  <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  <span>{project.client}</span>
                </div>
              )}

              <p className="text-primary/60 text-sm leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trusted By Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-primary mb-3 font-display">
            Confiaron en Nosotros
          </h3>
          <p className="text-muted-foreground text-sm mb-12">
            Instituciones públicas y privadas que respaldan nuestra trayectoria profesional
          </p>

          <div className="relative w-full overflow-hidden py-10">
            {/* Gradient Mask for sides */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <motion.div
              className="flex items-center gap-20 w-max"
              animate={{
                x: [0, -(100 + 80) * clientLogos.length]
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="w-44 h-24 flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all duration-700 transform hover:scale-105"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain filter drop-shadow-sm"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}