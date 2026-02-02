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
  Quote,
} from "lucide-react";
import ecoTourismImage from "@/assets/eco-tourism.jpg";

const conferenceTopics = [
  "Green Marketing turístico",
  "Tiendas Virtuales para el sector turismo",
  "Estrategia de Ventas Empresariales",
  "Redes Sociales y E-commerce",
  "Recursos Humanos para Empresas",
  "Marketing Empresarial",
  "Constitución de Empresas Turísticas",
];

const skills = [
  { icon: Target, text: "Liderazgo y toma de decisiones estratégicas" },
  { icon: Users, text: "Comunicación efectiva con stakeholders" },
  { icon: Monitor, text: "Dominio de software: Kiu, Amadeus, Google Suite" },
  { icon: TrendingUp, text: "Excel Profesional y Tecnología Empresarial" },
  { icon: Lightbulb, text: "Especialista en formación virtual y presencial" },
  { icon: CheckCircle2, text: "Formuladora de proyectos TURISMO EMPRENDE" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="sobre-mi" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            Sobre Mí
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-3 mb-6 font-display">
            Consultoría 360° en Turismo
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated group">
              <img
                src={ecoTourismImage}
                alt="Ecoturismo sostenible en la Amazonía peruana"
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-primary-foreground font-bold text-xl mb-1 font-display">
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
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-elevated border border-border"
            >
              <p className="text-5xl font-bold text-gradient font-display">100+</p>
              <p className="text-muted-foreground text-sm font-medium">Proyectos Exitosos</p>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-secondary/30 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants} className="text-foreground/80 text-lg leading-relaxed mb-8">
              Más de <strong className="text-primary font-semibold">13 años</strong> ofreciendo 
              soluciones innovadoras para el desarrollo de proyectos de turismo y 
              desarrollo sostenible. Mi estrategia busca incrementar la 
              visibilidad de los emprendimientos, fortalecer su posicionamiento 
              y fomentar la <strong className="text-accent font-semibold">rentabilidad social</strong>.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-secondary/10 to-accent/5 p-8 rounded-2xl mb-8 border border-secondary/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <Quote className="w-10 h-10 text-secondary/40 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary text-xl mb-3 font-display">
                    ¿Por qué trabajar con Yesenia Consultora?
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Porque nos avala la <strong className="text-secondary">trayectoria</strong>, 
                    con un respaldo de equipo de consultores en proyectos exitosos de 
                    desarrollo de destinos, turismo sostenible, calidad turística, 
                    ecoturismo, turismo cultural e industrial en Perú.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-accent/10 p-6 rounded-xl border-l-4 border-accent"
            >
              <p className="text-foreground font-medium">
                <span className="text-accent font-bold">LICENCIADA EN TURISMO</span> — 
                Más de 13 años de experiencia y más de 100 proyectos desarrollados 
                para instituciones públicas y privadas.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Conference Topics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card-premium p-8 md:p-10 mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 bg-secondary/10 rounded-xl">
              <Mic2 className="w-7 h-7 text-secondary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary font-display">
                Conferencista & Expositora
              </h3>
              <p className="text-muted-foreground text-sm">Especialidades y temas de ponencia</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {conferenceTopics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-xl hover:bg-secondary/10 transition-colors group"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-foreground/80 text-sm font-medium">{topic}</span>
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
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-10 font-display">
            Habilidades y Conocimientos
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                className="flex items-start gap-4 p-6 card-premium group"
              >
                <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-300">
                  <skill.icon className="w-5 h-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed font-medium pt-1">
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