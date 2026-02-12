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
  GraduationCap,
  Briefcase,
  MessageSquare,
} from "lucide-react";
import ecoTourismImage from "@/assets/eco-tourism.jpeg";
import speakerImage from "@/assets/conferencia/conferensista.jpeg";
import speakerImage1 from "@/assets/conferencia/conferensista1.jpeg";
import speakerImage2 from "@/assets/conferencia/conferensista2.jpeg";
import trainingImage from "@/assets/heroimagen.jpeg";

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
  { icon: GraduationCap, text: "Capacitación y formación profesional" },
  { icon: Briefcase, text: "Liderazgo y toma de decisiones estratégicas" },
  { icon: MessageSquare, text: "Comunicación efectiva con stakeholders" },
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
      {/* Background decoration - More LIFE and COLOR */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#176ddd]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full dot-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#176ddd] font-semibold text-sm tracking-[0.2em] uppercase">
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

            {/* Floating Badge - More Colorful */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-md p-7 rounded-[2.5rem] shadow-[#176ddd]/20 shadow-xl border border-[#176ddd]/20 transition-transform hover:scale-105 duration-300"
            >
              <p className="text-6xl font-black text-[#176ddd] font-display drop-shadow-sm">100+</p>
              <p className="text-primary/70 text-xs font-bold uppercase tracking-widest mt-1">Proyectos Exitosos</p>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#176ddd]/30 rounded-2xl -z-10" />
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
              className="bg-gradient-to-br from-[#176ddd]/10 to-accent/5 p-8 rounded-2xl mb-8 border border-[#176ddd]/20"
            >
              <div className="flex items-start gap-4 mb-4">
                <Quote className="w-10 h-10 text-[#176ddd]/40 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary text-xl mb-3 font-display">
                    ¿Por qué trabajar con Yesenia Consultora?
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Porque nos avala la <strong className="text-[#176ddd]">trayectoria</strong>,
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

        {/* Conference Topics - Speaker Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="card-premium p-8 md:p-12 mb-16 overflow-hidden relative"
        >
          {/* Decorative background shape */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-[#176ddd]/10 rounded-xl">
                  <Mic2 className="w-8 h-8 text-[#176ddd]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary font-display">
                    Conferencista & Expositora
                  </h3>
                  <p className="text-[#176ddd] font-medium tracking-wide">Especialidades y temas de ponencia</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {conferenceTopics.map((topic, index) => (
                  <motion.div
                    key={topic}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.08 }}
                    className="flex items-center gap-3 p-4 bg-card rounded-xl border border-white/50 shadow-sm hover:border-[#176ddd]/30 hover:bg-card/80 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#176ddd]/10 flex items-center justify-center shrink-0 group-hover:bg-[#176ddd]/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-[#176ddd] transition-transform group-hover:scale-110" />
                    </div>
                    <span className="text-primary/85 text-sm font-medium leading-tight">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="grid grid-cols-2 gap-4 h-[500px]">
                {/* Main Large Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="col-span-2 h-[280px] rounded-2xl overflow-hidden shadow-xl border border-white/10 group relative"
                >
                  <img
                    src={speakerImage2}
                    alt="Yesenia Cieza en Conferencia"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>

                {/* Smaller Image 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="h-[200px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group relative"
                >
                  <img
                    src={speakerImage}
                    alt="Yesenia Cieza Ponente"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>

                {/* Smaller Image 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="h-[200px] rounded-2xl overflow-hidden shadow-lg border border-white/10 group relative"
                >
                  <img
                    src={speakerImage1}
                    alt="Yesenia Cieza Taller"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </motion.div>
              </div>

              {/* Decorative elements for grid */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#176ddd]/10 rounded-full blur-2xl -z-10" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10" />

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-10 -right-4 bg-white/95 backdrop-blur-xl p-5 rounded-[2.5rem] shadow-glow-accent border border-accent/20 flex flex-col items-center z-20 hover:scale-110 transition-transform"
              >
                <div className="flex -space-x-2 mb-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-background flex items-center justify-center overflow-hidden shadow-sm">
                      <Users className="w-5 h-5 text-[#176ddd]" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-gradient-vibrant text-white text-[12px] font-black flex items-center justify-center shadow-md">
                    +500
                  </div>
                </div>
                <p className="text-[11px] uppercase font-black text-primary tracking-tighter">Impacto Social</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary font-display mb-4">
              Habilidades y Conocimientos
            </h3>
            <div className="w-20 h-1.5 bg-[#176ddd] mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Skills Content - Left Column (Text & Context) */}
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.text}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="group relative"
                  >
                    <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-white/50 shadow-sm hover:shadow-plomo hover:bg-card/80 transition-all duration-500 overflow-hidden">
                      <div className="w-12 h-12 rounded-2xl bg-[#176ddd]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-soft">
                        <skill.icon className="w-6 h-6 text-[#176ddd]" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-primary font-black text-sm group-hover:text-[#176ddd] transition-colors duration-300">{skill.text}</span>
                        <span className="text-primary/50 text-[10px] uppercase font-bold tracking-widest leading-none mt-1">Conocimiento Experto</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/10 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <p className="text-primary/80 text-sm font-medium">
                  Comprometida con la excelencia tecnológica y la formación continua en el sector turismo.
                </p>
              </motion.div>
            </div>

            {/* Skills Image - Right Column */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, x: 50, rotate: 2 }}
                animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                className="relative z-10"
              >
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <img
                    src={trainingImage}
                    alt="Capacitación y formación profesional"
                    className="w-full h-[550px] object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* Overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                  {/* Floating Info card inside image */}
                  <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white text-lg font-bold font-display italic">
                      "La formación es el pilar de un turismo competitivo"
                    </p>
                  </div>
                </div>

                {/* Accent elements - MORE COLOR */}
                <div className="absolute -top-10 -right-10 w-56 h-56 bg-secondary/30 rounded-full blur-[80px] -z-10 animate-pulse" />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/20 rounded-full blur-[100px] -z-10" />

                {/* Decorative border frame */}
                <div className="absolute -inset-6 border-2 border-dashed border-[#176ddd]/40 rounded-[4rem] -z-10 opacity-50" />
              </motion.div>

              {/* Skill percentage circle badges (visual flourish) */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -top-8 -left-8 w-24 h-24 bg-[#176ddd] rounded-3xl shadow-[#176ddd]/30 shadow-2xl flex flex-col items-center justify-center text-white z-20 hover:rotate-6 transition-transform"
              >
                <span className="text-3xl font-black">13+</span>
                <span className="text-[10px] uppercase font-bold tracking-tighter">Años exp</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}