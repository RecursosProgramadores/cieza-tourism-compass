import { motion } from "framer-motion";
import { ArrowDown, MapPin, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-machu-picchu.jpg";

export default function HeroSection() {
  const handleScrollToAbout = () => {
    const element = document.querySelector("#sobre-mi");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Machu Picchu al amanecer - Turismo sostenible en Perú"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-2xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 bg-secondary/20 backdrop-blur-sm rounded-full text-secondary text-sm font-medium mb-4">
            Consultoría 360° en Turismo Sostenible
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 leading-tight"
        >
          YESENIA CIEZA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl lg:text-2xl text-secondary font-semibold mb-6 tracking-wide"
        >
          CONSULTORA INTEGRAL DE PROYECTOS TURÍSTICOS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-primary-foreground/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Más de 13 años ofreciendo soluciones innovadoras para el desarrollo de 
          proyectos de turismo sostenible en Perú
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12"
        >
          <div className="flex items-center gap-2 text-primary-foreground">
            <Award className="w-5 h-5 text-secondary" />
            <span className="font-bold text-2xl">13+</span>
            <span className="text-sm opacity-80">Años de Experiencia</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <Briefcase className="w-5 h-5 text-secondary" />
            <span className="font-bold text-2xl">100+</span>
            <span className="text-sm opacity-80">Proyectos Desarrollados</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="font-bold text-2xl">Perú</span>
            <span className="text-sm opacity-80">Cobertura Nacional</span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={handleScrollToContact}
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-8 py-6"
          >
            Solicitar Consultoría
          </Button>
          <Button
            onClick={handleScrollToAbout}
            size="lg"
            variant="outline"
            className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6"
          >
            Conocer Más
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={handleScrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-primary-foreground/70 hover:text-secondary transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}