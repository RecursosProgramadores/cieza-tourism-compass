import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Share2, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-tourism.jpg";

const communityFeatures = [
  {
    icon: Users,
    title: "Red de Profesionales",
    description: "Conecta con expertos en turismo sostenible de todo el Perú",
  },
  {
    icon: Share2,
    title: "Recursos Compartidos",
    description: "Accede a guías, plantillas y materiales exclusivos",
  },
  {
    icon: Calendar,
    title: "Eventos y Webinars",
    description: "Participa en capacitaciones y encuentros virtuales",
  },
  {
    icon: MessageCircle,
    title: "Foro de Discusión",
    description: "Comparte experiencias y resuelve dudas con colegas",
  },
];

export default function CommunitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/51943254265?text=Hola,%20me%20interesa%20unirme%20a%20la%20comunidad%20turística", "_blank");
  };

  return (
    <section id="comunidad" className="py-20 md:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
              Únete a Nuestra Red
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-2 mb-6">
              Comunidad Turística
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed mb-8">
              Espacio para conectar con la comunidad turística en Perú, compartir 
              recursos, eventos y colaboraciones en turismo sostenible. Juntos 
              impulsamos el desarrollo del sector.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Únete por WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10"
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
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={communityImage}
                alt="Comunidad turística peruana - Encuentro de profesionales"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-card/90 backdrop-blur-sm rounded-xl p-6">
                  <p className="text-primary font-bold text-lg mb-2">
                    "El conocimiento compartido multiplica el impacto"
                  </p>
                  <p className="text-muted-foreground text-sm">
                    — Filosofía de nuestra comunidad
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-elevated"
            >
              <p className="text-3xl font-bold">500+</p>
              <p className="text-sm opacity-90">Profesionales</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}