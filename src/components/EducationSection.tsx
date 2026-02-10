import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, FileCheck, BookOpen, Calendar, Mic2, Users } from "lucide-react";

const education = [
  {
    type: "degree",
    title: "Maestría en Gestión Pública",
    institution: "Universidad César Vallejo",
    year: "2021",
    location: "Tarapoto",
  },
  {
    type: "degree",
    title: "Lic. Administración en Turismo",
    institution: "Universidad Nacional San Martín",
    year: "",
    location: "San Martín",
  },
  {
    type: "certification",
    title: "Colegiatura COLITUR",
    institution: "Colegio de Licenciados en Turismo San Martín",
    year: "",
    location: "San Martín",
  },
];

const diplomas = [
  { title: "Diplomado en Ecoturismo Sostenible", institution: "Consejos Ibero Americanos", year: "2025", location: "Lima" },
  { title: "Diplomado en APP y Obra por Impuestos (OXI)", institution: "Universidad San Luis Gonzaga UNICA", year: "2025", location: "Lima" },
  { title: "Diplomado en Gestión Pública", institution: "Universidad Nacional de Trujillo", year: "2022", location: "Trujillo" },
  { title: "Diplomado en Gestión de RRHH y Ley de Servicio Civil", institution: "Colegio de Economistas del Perú", year: "2019", location: "Lima" },
  { title: "Diplomado en Formulación de Proyectos de Inversión", institution: "Colegio de Economistas del Perú", year: "2019", location: "Lima" },
  { title: "Diplomado en Turismo y Nuevos Enfoques", institution: "CENFOTUR", year: "2011", location: "Lima" },
];

const courses = [
  { title: "Excel para Docentes", institution: "Cámara Mundial de Conferencistas", year: "2020" },
  { title: "Educador Certificado Google Nivel 1", institution: "Cámara Mundial de Conferencistas", year: "2020" },
  { title: "Edición de Video para Docentes", institution: "Cámara Mundial de Conferencistas", year: "2020" },
  { title: "Elaboración de Expedientes Turísticos", institution: "COLITUR La Libertad", year: "2020" },
  { title: "Atención al Cliente", institution: "COLITUR La Libertad", year: "2020" },
  { title: "Marketing Turístico", institution: "COLITUR La Libertad", year: "2020" },
];

const presentations = [
  { title: "Creación de Tiendas Virtuales", institution: "CCPTSM - Cámara de Comercio San Martín", year: "2019" },
  { title: "Redes Sociales y Marketing Digital", institution: "CCPTSM", year: "2019" },
  { title: "Turismo y Nuevos Enfoques", institution: "UNSM", year: "2011" },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="educacion" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration - More LIFE and COLOR */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-pulse-soft" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] translate-y-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            Trayectoria Académica
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-3 mb-6 font-display">
            Educación y Formación
          </h2>
          <div className="section-divider" />
        </motion.div>

        {/* Main Education Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-10 text-center group border border-white/50 bg-card shadow-sm hover:shadow-plomo transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center p-5 bg-[#176ddd]/10 rounded-[2rem] mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm border border-[#176ddd]/20">
                {item.type === "degree" ? (
                  <GraduationCap className="w-10 h-10 text-[#176ddd]" />
                ) : (
                  <Award className="w-10 h-10 text-[#176ddd]" />
                )}
              </div>
              {item.year && (
                <span className="inline-block text-secondary font-black text-xs bg-secondary/10 px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
                  {item.year}
                </span>
              )}
              <h3 className="font-black text-primary text-2xl mb-4 font-display leading-tight">{item.title}</h3>
              <p className="text-secondary font-bold text-sm mb-2">{item.institution}</p>
              <p className="text-primary/50 text-xs uppercase tracking-tighter">{item.location}</p>
            </motion.div>
          ))}
        </div>

        {/* Diplomas Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-secondary/10 rounded-xl">
              <FileCheck className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-2xl font-bold text-primary font-display">Diplomados</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {diplomas.map((diploma, index) => (
              <motion.div
                key={diploma.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
                className="bg-card p-5 rounded-xl hover:bg-card/80 hover:shadow-sm transition-all duration-300 border border-white/50 hover:border-secondary/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {diploma.year}
                  </span>
                  <span className="text-xs text-primary/50">{diploma.location}</span>
                </div>
                <h4 className="font-semibold text-primary text-sm mb-2 leading-tight">{diploma.title}</h4>
                <p className="text-xs text-primary/60">{diploma.institution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Courses & Presentations */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Courses & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary font-display">Cursos & Certificaciones</h3>
                <p className="text-muted-foreground text-sm">Formación complementaria y técnica</p>
              </div>
            </div>

            <div className="grid gap-4">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.08 }}
                  className="group relative p-5 rounded-2xl bg-card border border-border/50 hover:border-accent/40 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-base mb-1 group-hover:text-accent transition-colors leading-tight">
                        {course.title}
                      </h4>
                      <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <Award className="w-3 h-3 text-accent/60" />
                        {course.institution}
                      </p>
                    </div>
                    <span className="text-[10px] font-black text-accent bg-accent/10 px-2 py-1 rounded-md shrink-0">
                      {course.year}
                    </span>
                  </div>
                  {/* Subtle progress indicator or decorative dot */}
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent/20 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Presentations & Seminars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <Mic2 className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary font-display">Ponencias & Seminarios</h3>
                <p className="text-muted-foreground text-sm">Transferencia de conocimiento</p>
              </div>
            </div>

            <div className="grid gap-4">
              {presentations.map((presentation, index) => (
                <motion.div
                  key={presentation.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + index * 0.08 }}
                  className="group relative p-5 rounded-2xl bg-card border border-border/50 hover:border-secondary/40 hover:shadow-soft transition-all duration-300"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-bold text-foreground text-base mb-1 group-hover:text-secondary transition-colors leading-tight">
                        {presentation.title}
                      </h4>
                      <p className="text-muted-foreground text-xs font-medium uppercase tracking-wider flex items-center gap-1.5">
                        <Users className="w-3 h-3 text-secondary/60" />
                        {presentation.institution}
                      </p>
                    </div>
                    <span className="text-[10px] font-black text-secondary bg-secondary/10 px-2 py-1 rounded-md shrink-0">
                      {presentation.year}
                    </span>
                  </div>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-secondary/20 rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section >
  );
}