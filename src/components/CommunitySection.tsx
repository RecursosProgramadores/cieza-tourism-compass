import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Share2, Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-tourism.jpg";
import whatsappIcon from "@/assets/iconos/whatsapp.svg";

const communityFeatures = [
  {
    icon: Users,
    title: "Red de Profesionales",
    description: "Conecta con expertos en turismo sostenible",
  },
  {
    icon: Share2,
    title: "Recursos Exclusivos",
    description: "Guías, plantillas y materiales de valor",
  },
  {
    icon: Calendar,
    title: "Eventos y Webinars",
    description: "Capacitaciones y encuentros virtuales",
  },
  {
    icon: () => <img src={whatsappIcon} alt="" className="w-6 h-6" />,
    title: "Foro de Discusión",
    description: "Comparte y aprende con colegas",
  },
];

export default function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/51943254265?text=Hola,%20me%20interesa%20unirme%20a%20la%20comunidad%20turística", "_blank");
  };

  return (
    <section id="comunidad" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden" ref={ref}>
      {/* Background decoration - More LIFE and COLOR */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] animate-pulse-soft" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full dot-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
              Únete a Nuestra Red
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-3 mb-6 font-display">
              Comunidad Turística
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-10">
              Espacio exclusivo para conectar con la comunidad turística en Perú.
              Comparte recursos, participa en eventos y colabora en proyectos de
              turismo sostenible.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-card border border-white/50 hover:border-secondary/30 hover:shadow-plomo transition-all duration-300 group"
                >
                  <div className="p-4 bg-secondary/10 rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-black text-primary text-base mb-1">{feature.title}</h3>
                    <p className="text-primary/60 text-[13px] leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#22c55e]/90 text-white px-10 py-7 text-lg shadow-glow-accent rounded-2xl group border-none"
              >
                <img src={whatsappIcon} alt="" className="w-6 h-6 mr-3 brightness-0 invert" />
                Únete por WhatsApp
                <ArrowRight className="w-5 h-5 ml-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#176ddd] hover:bg-[#176ddd]/90 text-white font-black px-10 py-7 text-lg rounded-2xl transition-all duration-300 shadow-glow-secondary border-none"
                onClick={() => window.open("https://www.facebook.com/YeseniaCiezaConsultora", "_blank")}
              >
                Síguenos en Facebook
              </Button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={communityImage}
                alt="Comunidad turística peruana"
                className="w-full h-[550px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />

              {/* Quote overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="bg-card/95 backdrop-blur-sm rounded-2xl p-6 shadow-elevated"
                >
                  <p className="text-primary font-bold text-lg mb-2 font-display">
                    "El conocimiento compartido multiplica el impacto"
                  </p>
                  <p className="text-muted-foreground text-sm">
                    — Filosofía de nuestra comunidad
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -top-10 -right-10 bg-secondary text-secondary-foreground p-8 rounded-[3rem] shadow-glow-secondary border-4 border-white group-hover:scale-110 transition-transform duration-500"
            >
              <p className="text-5xl font-black font-display tracking-tighter">500+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-90 mt-1">Profesionales</p>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}