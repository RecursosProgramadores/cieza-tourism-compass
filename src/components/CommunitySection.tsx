import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Share2, Calendar, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-tourism.jpg";

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
    icon: MessageCircle,
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
    <section id="comunidad" className="py-24 md:py-32 bg-muted/40 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
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
                  className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-secondary/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="p-3 bg-secondary/10 rounded-xl flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary text-sm mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-xs leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-soft hover:shadow-glow transition-all duration-300 btn-shine group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Únete por WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-secondary/30 text-secondary hover:bg-secondary/10 hover:border-secondary font-semibold transition-all duration-300"
                onClick={() => window.open("https://www.facebook.com", "_blank")}
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
              className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-2xl shadow-elevated"
            >
              <p className="text-4xl font-bold font-display">500+</p>
              <p className="text-sm opacity-90">Profesionales</p>
            </motion.div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-2 border-accent/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}