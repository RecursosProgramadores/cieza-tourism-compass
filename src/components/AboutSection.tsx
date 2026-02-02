import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  CheckCircle2,
  Mic2,
  Users,
  Target,
  Lightbulb,
  Monitor,
  TrendingUp,
} from "lucide-react";
import ecoTourismImage from "@/assets/eco-tourism.jpg";

const conferenceTopics = [
  "Green Marketing turístico",
  "Tiendas Virtuales - Cómo Crear una Tienda Virtual",
  "Estrategia de Ventas Empresariales",
  "Redes Sociales - E-commerce",
  "Recursos Humanos de Empresas",
  "Marketing Empresarial",
  "Constitución de Empresas Turísticas",
];

const skills = [
  { icon: Target, text: "Liderazgo y Capacidad para tomar decisiones" },
  { icon: Users, text: "Comunicación efectiva con stakeholders" },
  { icon: Monitor, text: "Dominio de software: Kiu, Amadeus, Google Suite" },
  { icon: TrendingUp, text: "Excel Profesional y Tecnología Empresarial" },
  { icon: Lightbulb, text: "Especialista en Cursos Virtuales y Presenciales" },
  { icon: CheckCircle2, text: "Formuladora de proyectos TURISMO EMPRENDE" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre-mi" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            Sobre Mi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-4">
            Consultoría 360 en Turismo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={ecoTourismImage}
                alt="Ecoturismo sostenible en la Amazonía peruana"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-semibold text-lg">
                  Desarrollo Sostenible
                </p>
                <p className="text-primary-foreground/80 text-sm">
                  Proyectos de turismo responsable en Perú
                </p>
              </div>
            </div>
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-card"
            >
              <p className="text-4xl font-bold text-secondary">100+</p>
              <p className="text-muted-foreground text-sm">Proyectos</p>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              Más de <strong className="text-primary">13 años</strong> ofreciendo 
              soluciones innovadoras para el desarrollo de proyectos de turismo y 
              desarrollo sostenible. La estrategia no solo busca incrementar la 
              visibilidad de los emprendimientos, sino también fortalecer su 
              posicionamiento en el mercado y fomentar la{" "}
              <strong className="text-accent">rentabilidad social</strong>.
            </p>

            <div className="bg-secondary/10 p-6 rounded-xl mb-8">
              <h3 className="font-bold text-primary text-lg mb-3">
                ¿Por qué trabajar con YESENIA CONSULTORA?
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Porque nos avala la trayectoria, con un{" "}
                <strong className="text-secondary">RESPALDO</strong> de equipo de 
                consultores en <strong>PROYECTOS EXITOSOS</strong> de desarrollo 
                de destinos, turismo sostenible, calidad turística, ecoturismo, 
                turismo cultural y turismo industrial en Perú.
              </p>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border-l-4 border-accent">
              <p className="text-foreground font-medium">
                <strong className="text-accent">LICENCIADA EN TURISMO</strong> con 
                más de 13 años de experiencia y más de 100 proyectos desarrollados 
                para instituciones públicas y privadas.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Conference Topics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-card rounded-2xl p-8 shadow-card mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-secondary/10 rounded-lg">
              <Mic2 className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold text-primary">
              Conferencista - Ponente - Expositora
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {conferenceTopics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80 text-sm">{topic}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Habilidades y Conocimientos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <skill.icon className="w-5 h-5 text-secondary" />
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  {skill.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}