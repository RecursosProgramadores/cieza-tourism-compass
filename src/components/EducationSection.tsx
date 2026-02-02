import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, FileCheck, BookOpen } from "lucide-react";

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
  {
    title: "Diplomado en Ecoturismo Sostenible",
    institution: "Consejos Ibero Americanos",
    year: "2025",
    location: "Lima",
  },
  {
    title: "Diplomado en APP y Obra por Impuestos (OXI)",
    institution: "Universidad San Luis Gonzaga UNICA",
    year: "2025",
    location: "Lima",
  },
  {
    title: "Diplomado en Gestión Pública",
    institution: "Universidad Nacional de Trujillo",
    year: "2022",
    location: "Trujillo",
  },
  {
    title: "Diplomado en Gestión de Recursos Humanos y Ley de Servicio Civil",
    institution: "Colegio de Economistas del Perú",
    year: "2019",
    location: "Lima",
  },
  {
    title: "Diplomado en Formulación de Proyectos de Inversión",
    institution: "Colegio de Economistas del Perú",
    year: "2019",
    location: "Lima",
  },
  {
    title: "Diplomado en Turismo y Nuevos Enfoques",
    institution: "CENFOTUR",
    year: "2011",
    location: "Lima",
  },
];

const courses = [
  { title: "Excel para Docentes", institution: "Cámara Mundial de Conferencistas", year: "2020" },
  { title: "Educador Certificado de Google Nivel 1", institution: "Cámara Mundial de Conferencistas", year: "2020" },
  { title: "Edición de Video para Docentes", institution: "Cámara Mundial de Conferencistas", year: "2020" },
  { title: "Elaboración de Expedientes Turísticos", institution: "COLITUR La Libertad", year: "2020" },
  { title: "Atención al Cliente", institution: "COLITUR La Libertad", year: "2020" },
  { title: "Marketing Turístico", institution: "COLITUR La Libertad", year: "2020" },
];

const presentations = [
  { title: "Creación de Tiendas Virtuales", institution: "CCPTSM - Cámara de Comercio San Martín", year: "2019" },
  { title: "Redes Sociales y Marketing Digital - Sector Turismo", institution: "CCPTSM", year: "2019" },
  { title: "Turismo y Nuevos Enfoques (Seminario)", institution: "UNSM", year: "2011" },
];

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="educacion" className="py-20 md:py-32 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            Trayectoria Académica
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            Educación y Formación
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* Main Education */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:border-secondary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary rounded-lg">
                  {item.type === "degree" ? (
                    <GraduationCap className="w-6 h-6 text-primary-foreground" />
                  ) : (
                    <Award className="w-6 h-6 text-primary-foreground" />
                  )}
                </div>
                {item.year && (
                  <span className="text-secondary font-bold">{item.year}</span>
                )}
              </div>
              <h3 className="font-bold text-primary text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.institution}</p>
              <p className="text-muted-foreground text-xs mt-1">{item.location}</p>
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
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <FileCheck className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-primary">Diplomados</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {diplomas.map((diploma, index) => (
              <motion.div
                key={diploma.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                className="bg-muted/50 p-4 rounded-xl hover:bg-secondary/5 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-secondary bg-secondary/10 px-2 py-1 rounded">
                    {diploma.year}
                  </span>
                  <span className="text-xs text-muted-foreground">{diploma.location}</span>
                </div>
                <h4 className="font-semibold text-foreground text-sm mb-1">{diploma.title}</h4>
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
            className="bg-card rounded-2xl p-6 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-accent/10 rounded-lg">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-primary">Cursos y Certificaciones</h3>
            </div>
            <div className="space-y-3">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg"
                >
                  <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded mt-0.5">
                    {course.year}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{course.title}</p>
                    <p className="text-xs text-muted-foreground">{course.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Presentations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card rounded-2xl p-6 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <Award className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-primary">Ponencias y Seminarios</h3>
            </div>
            <div className="space-y-3">
              {presentations.map((presentation) => (
                <div
                  key={presentation.title}
                  className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg"
                >
                  <span className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded mt-0.5">
                    {presentation.year}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{presentation.title}</p>
                    <p className="text-xs text-muted-foreground">{presentation.institution}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}