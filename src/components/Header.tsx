import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown,
  Briefcase, Target, LineChart, Compass,
  PenTool, Rocket, GraduationCap, Database
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Asesoría Técnica en Gestión Turística", href: "#servicios", icon: Briefcase },
  { name: "Planificación Estratégica", href: "#servicios", icon: Target },
  { name: "Marketing & Comunicaciones", href: "#servicios", icon: Rocket },
  { name: "Diseño de Experiencias Turísticas", href: "#servicios", icon: Compass },
  { name: "Ecodiseño y Arquitectura", href: "#servicios", icon: PenTool },
  { name: "Turismo Emprende", href: "#servicios", icon: LineChart },
  { name: "Cursos y Capacitaciones", href: "#servicios", icon: GraduationCap },
  { name: "Gestión de la Información Turística", href: "#servicios", icon: Database },
];

const navLinks = [
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Educación", href: "#educacion" },
  { name: "Servicios", href: "#servicios", hasDropdown: true },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Comunidad", href: "#comunidad" },
  { name: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl ${isScrolled
        ? "bg-[#176ddd]/95 shadow-glow-secondary py-2.5 rounded-full border border-white/20 px-6 backdrop-blur-xl"
        : "bg-[#176ddd]/80 backdrop-blur-md py-4 rounded-[2rem] border border-white/10"
        }`}
    >
      <div className="container mx-auto px-2 lg:px-4">
        <div className="flex items-center justify-between">
          {/* Logo - Brand Elevation */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white font-display font-bold text-xl md:text-2xl tracking-tight bg-gradient-to-r from-white via-white to-blue-200 bg-clip-text text-transparent drop-shadow-sm transition-all duration-300 group-hover:scale-105">
              Yesenia Cieza
            </span>
            <span className="text-white/70 font-sans font-medium text-[8px] md:text-[9px] tracking-[0.4em] uppercase transition-colors duration-300 group-hover:text-white">
              Consultora turística
            </span>
          </motion.a>

          {/* Desktop Navigation - Premium & Dynamic */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 font-sans font-bold text-[11px] uppercase tracking-widest flex items-center gap-1.5 rounded-full transition-all duration-300 hover:bg-white/10 ${activeSection === link.href.replace("#", "")
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                    }`}
                >
                  {/* Floating Pill Background */}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 bg-white shadow-sm rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-[#176ddd]/20 rounded-full" />
                    </motion.div>
                  )}

                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </button>

                {/* Services Dropdown - Enhanced */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-[440px] bg-[#176ddd] shadow-[0_20px_60px_rgba(0,0,0,0.4)] rounded-3xl overflow-hidden mt-4 border border-white/20 p-2.5"
                      >
                        <div className="grid grid-cols-2 gap-1.5">
                          {services.map((service, idx) => (
                            <motion.button
                              key={service.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.03 }}
                              onClick={() => handleNavClick(service.href)}
                              className="w-full px-4 py-4 text-left hover:bg-white/10 rounded-2xl transition-all duration-300 group flex items-center gap-4 border border-transparent hover:border-white/5"
                            >
                              <div className="p-2.5 bg-white/10 rounded-xl group-hover:bg-white group-hover:text-[#176ddd] transition-all duration-300 shadow-sm">
                                <service.icon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                              </div>
                              <span className="text-[11px] font-bold text-white leading-tight uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                                {service.name}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="ml-6"
            >
              <Button
                onClick={() => handleNavClick("#contacto")}
                className="bg-white hover:bg-blue-50 text-[#176ddd] px-8 py-2.5 rounded-full shadow-[0_4px_20px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)] transition-all duration-300 font-black tracking-widest uppercase text-[10px] hover:scale-105 active:scale-95"
              >
                Solicitar Consultoría
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button - Glass Style */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:hidden text-white p-2.5 bg-white/10 hover:bg-white/20 rounded-full border border-white/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu - Premium Feel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="lg:hidden mt-4 pb-6 overflow-hidden bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10"
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <button
                      onClick={() => {
                        if (link.hasDropdown) {
                          setIsServicesOpen(!isServicesOpen);
                        } else {
                          handleNavClick(link.href);
                        }
                      }}
                      className={`w-full text-left px-5 py-3.5 rounded-xl transition-all font-bold text-xs uppercase tracking-widest flex items-center justify-between ${activeSection === link.href.replace("#", "")
                        ? "bg-white/20 text-white"
                        : "text-white/80 hover:bg-white/10"
                        }`}
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </button>

                    {link.hasDropdown && isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white/5 rounded-xl mx-2 my-2 overflow-hidden border border-white/5"
                      >
                        {services.map((service) => (
                          <button
                            key={service.name}
                            onClick={() => handleNavClick(service.href)}
                            className="w-full px-6 py-3.5 text-left text-white/70 hover:text-white hover:bg-white/10 transition-all text-[10px] font-bold uppercase tracking-wide flex items-center gap-3"
                          >
                            <service.icon className="w-3.5 h-3.5 text-white/50" />
                            {service.name}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-4"
                >
                  <Button
                    onClick={() => handleNavClick("#contacto")}
                    className="w-full bg-white text-[#176ddd] font-black py-6 rounded-xl shadow-xl uppercase tracking-[0.2em] text-xs hover:bg-blue-50 transition-colors"
                  >
                    Solicitar Consultoría
                  </Button>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}