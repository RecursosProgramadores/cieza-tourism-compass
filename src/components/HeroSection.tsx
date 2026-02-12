import { motion } from "framer-motion";
import { ArrowDown, MapPin, Award, Briefcase, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/heroimagen.jpeg";
import heroFoto from "@/assets/conferensista1.jpeg";

export default function HeroSection() {
  const handleScrollToAbout = () => {
    const element = document.querySelector("#sobre-mi");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contacto");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroImage}
          alt="Machu Picchu al amanecer - Turismo sostenible en Perú"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Cinematic Curtain Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent lg:from-black/70 lg:via-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        {/* Overlay pattern - very subtle */}
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </motion.div>

      {/* Decorative Elements - More LIFE and COLOR */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-[5%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px]"
          animate={{
            y: [0, 60, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-[5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]"
          animate={{
            scale: [0.8, 1.1, 0.8],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Colorful geometric accents */}
        <motion.div
          className="absolute top-1/4 right-[15%] w-24 h-24 border-4 border-secondary/30 rounded-full"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-[15%] w-16 h-16 border-4 border-accent/30 rounded-[1.5rem]"
          animate={{ y: [0, 20, 0], rotate: [0, -90, -180], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* MAIN TITLE: Horizontal and Centered below Header (Global) */}
      <div className="absolute left-1/2 top-32 -translate-x-1/2 z-30 pointer-events-none w-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0]
          }}
          transition={{
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
          className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-white font-display tracking-tighter drop-shadow-[0_0_25px_rgba(255,255,255,0.7)]"
        >
          Consultoría <span className="text-[#176ddd] drop-shadow-glow">360°</span> en Turismo
        </motion.h1>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-44 lg:pt-52 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full relative">

          {/* Left Column: Context & Action */}
          <div className="max-w-xl text-left z-20 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group p-8 md:p-10 rounded-[2.5rem] bg-black/25 backdrop-blur-xl border border-white/10 shadow-elevated transition-all duration-500 hover:bg-black/35 hover:border-white/20 hover:scale-[1.02]"
            >
              {/* Tagline */}
              <h2 className="text-white font-black text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 tracking-tight">
                Consultora Integral de <span className="text-[#176ddd] drop-shadow-glow-secondary">Proyectos Turísticos</span>
              </h2>

              {/* Description */}
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 font-medium">
                Más de <span className="text-white font-black">13 años</span> transformando el turismo peruano con <span className="text-[#176ddd] font-bold italic">soluciones innovadoras</span> y desarrollo sostenible con <strong className="text-white">proyectos nacionales e internacionales</strong>.
              </p>

              {/* Refactored Stats Grid */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                {/* Projects Stat */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-[#176ddd] tracking-tighter">100</span>
                    <span className="text-2xl font-black text-[#176ddd]">+</span>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/50 leading-none">Proyectos Exitosos</span>
                </div>

                {/* Location/Nature Stat */}
                <div className="flex flex-col gap-1">
                  <span className="text-4xl font-black text-white tracking-tighter">Perú</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/50 leading-none truncate">Turismo Sostenible</span>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons - Centered and Animated */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start"
            >
              <Button
                onClick={handleScrollToContact}
                size="lg"
                className="w-full sm:w-auto bg-[#176ddd] hover:bg-[#145cb8] text-white px-10 py-7 text-lg shadow-glow-secondary rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95 font-bold"
              >
                Solicitar Consultoría
              </Button>
              <Button
                onClick={handleScrollToAbout}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-[#176ddd]/20 text-[#176ddd] hover:bg-[#176ddd]/5 px-10 py-7 text-lg backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-[#176ddd]/40 font-bold"
              >
                Conocer Más
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Imagery */}
          <div className="relative z-10 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-lg aspect-[4/5] lg:aspect-[16/11] group"
            >
              {/* Premium Glow */}
              <div className="absolute -inset-8 bg-secondary/10 rounded-[3rem] blur-[60px] -z-10 group-hover:bg-secondary/20 transition-all duration-700 opacity-60" />

              {/* Container */}
              <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden border-2 border-primary-foreground/15 shadow-2xl transition-all duration-500 group-hover:border-secondary/40">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full"
                >
                  <img
                    src={heroFoto}
                    alt="Yesenia Cieza - Consultora Turística"
                    className="w-full h-full object-cover object-top"
                  />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-40" />
              </div>

              {/* Badge - More Vibrant */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-xl p-5 rounded-[2rem] shadow-plomo border border-secondary/30 flex items-center gap-4 z-40 group-hover:scale-110 transition-transform duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shadow-lg animate-pulse-soft">
                  <Award className="w-7 h-7 text-secondary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-primary font-black text-base leading-tight">Experiencia superior</span>
                  <span className="text-secondary font-bold text-[10px] uppercase tracking-wider">Desarrollo Sostenible</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}