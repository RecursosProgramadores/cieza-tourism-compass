import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, FileCheck, BookOpen, Calendar } from "lucide-react";

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
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
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
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-premium p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center p-4 bg-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.type === "degree" ? (
                  <GraduationCap className="w-8 h-8 text-primary-foreground" />
                ) : (
                  <Award className="w-8 h-8 text-primary-foreground" />
                )}
              </div>
              {item.year && (
                <span className="inline-block text-secondary font-bold text-sm bg-secondary/10 px-3 py-1 rounded-full mb-4">
                  {item.year}
                </span>
              )}
              <h3 className="font-bold text-primary text-xl mb-3 font-display">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
              <p className="text-muted-foreground text-xs">{item.location}</p>
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
                className="bg-muted/50 p-5 rounded-xl hover:bg-secondary/5 hover:shadow-soft transition-all duration-300 border border-transparent hover:border-secondary/20"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {diploma.year}
                  </span>
                  <span className="text-xs text-muted-foreground">{diploma.location}</span>
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-2 leading-tight">{diploma.title}</h4>
                <p className="text-xs text-muted-foreground">{diploma.institution}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Courses & Presentations */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="card-premium p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary font-display">Cursos y Certificaciones</h3>
            </div>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl hover:bg-accent/5 transition-colors"
                >
                  <span className="text-xs font-bold text-accent bg-accent/10 px-2.5 py-1 rounded-full mt-0.5 flex-shrink-0">
                    {course.year}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{course.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{course.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Presentations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="card-premium p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary font-display">Ponencias y Seminarios</h3>
            </div>
            <div className="space-y-3">
              {presentations.map((presentation, index) => (
                <motion.div
                  key={presentation.title}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.05 }}
                  className="flex items-start gap-4 p-4 bg-muted/30 rounded-xl hover:bg-secondary/5 transition-colors"
                >
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-1 rounded-full mt-0.5 flex-shrink-0">
                    {presentation.year}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground leading-tight">{presentation.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{presentation.institution}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}