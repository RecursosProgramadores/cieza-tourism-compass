import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar, Building2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Especialista en Difusión, Capacitación y Sensibilización Turística",
    company: "GUZMÁN ARTISTAS PROFESIONALES E.I.R.L.",
    ruc: "20601933277",
    client: "GORE LIBERTAD",
    year: "2025",
    description: "Elaboración del Expediente Técnico del proyecto 'Los Balsares de Huanchaco, con CUI N° 2664887'",
    location: "La Libertad",
    current: true,
  },
  {
    title: "Evaluador de Expediente Técnico Turístico",
    company: "AREVALO PEZO JEIGER HOMERO",
    ruc: "10420278174",
    client: "GORE LIBERTAD",
    year: "2025",
    description: "Evaluador de Expediente Técnico Turístico Calipuy - CUI: 2646339. El Santuario Nacional de Calipuy es el hogar de la mayor cantidad de guanacos del Perú.",
    location: "La Libertad",
    current: true,
  },
  {
    title: "Asesora Turística",
    company: "Hotel Vuelo 78",
    client: "",
    year: "2023",
    description: "Asesoría del proyecto turístico. Desarrollo de estrategia turística hotelera.",
    location: "Lima",
  },
  {
    title: "Especialista de Proyecto de Rutas Turísticas",
    company: "Amazonas",
    client: "",
    year: "2024",
    description: "Desarrollo de plan turístico para la región amazónica.",
    location: "Iquitos",
  },
  {
    title: "Asesora Turística de Municipalidad Distrital",
    company: "Municipalidad Distrital de La Banda de Shilcayo",
    ruc: "20142659299",
    client: "",
    year: "2021",
    description: "Elaboración de PDTL Plan de Desarrollo Local Turístico. Asesoría técnica para proyectos turísticos.",
    location: "San Martín",
  },
  {
    title: "Sub Gerencia de Promoción del Turismo",
    company: "Municipalidad Provincial San Martín",
    ruc: "20154544667",
    client: "",
    year: "2020",
    description: "Funcionaria Pública, encargada de desarrollar proyectos turísticos.",
    location: "Tarapoto, San Martín",
  },
  {
    title: "Especialista en Turismo",
    company: "INNOVA TRAINING E INTERPRISE SAC",
    ruc: "20602122622",
    client: "",
    year: "2018-2020",
    description: "Desarrollo de proyectos turísticos internacionales en Ecuador y Bolivia.",
    location: "Ecuador y Bolivia",
  },
];

const trustedBy = [
  "MINISTERIO DE TURISMO",
  "GOBIERNO REGIONAL SAN MARTÍN",
  "GOBIERNO REGIONAL LORETO",
  "GOBIERNO REGIONAL LA LIBERTAD",
  "CÁMARA DE COMERCIO SAN MARTÍN",
  "UNSM",
  "MUNICIPALIDAD DE LA BANDA DE SHILCAYO",
  "MUNICIPALIDAD DE SAN MARTÍN",
  "PROMPERÚ",
  "CANATUR",
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="proyectos" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            Trayectoria Profesional
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            Proyectos Desarrollados
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Projects Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-secondary via-primary to-accent rounded-full" />

          <div className="space-y-8 md:space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title + project.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div
                    className={`bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-shadow ${
                      project.current ? "ring-2 ring-accent" : ""
                    }`}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      {project.current && (
                        <span className="bg-accent text-accent-foreground text-xs font-bold px-2 py-1 rounded">
                          ACTUAL
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-secondary font-semibold">
                        <Calendar className="w-4 h-4" />
                        {project.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-primary text-lg mb-2">{project.title}</h3>
                    <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <Building2 className="w-4 h-4" />
                      <span>{project.company}</span>
                    </div>
                    {project.client && (
                      <div className={`flex items-center gap-2 text-secondary text-sm mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <ExternalLink className="w-4 h-4" />
                        <span>{project.client}</span>
                      </div>
                    )}
                    <p className="text-foreground/80 text-sm leading-relaxed mb-3">
                      {project.description}
                    </p>
                    <div className={`flex items-center gap-2 text-muted-foreground text-xs ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline Point */}
                <div className="hidden md:flex items-center justify-center w-12">
                  <div className="w-4 h-4 bg-secondary rounded-full ring-4 ring-background shadow-lg" />
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl font-bold text-primary mb-8">
            Confiaron en Nosotros
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {trustedBy.map((org, index) => (
              <motion.div
                key={org}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.05 }}
                className="px-6 py-3 bg-muted rounded-lg border border-border hover:border-secondary/30 transition-colors"
              >
                <span className="text-muted-foreground text-sm font-medium grayscale hover:grayscale-0 transition-all">
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