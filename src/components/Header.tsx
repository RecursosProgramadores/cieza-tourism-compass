import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { name: "Asesoría Técnica en Gestión Turística", href: "#servicios" },
  { name: "Planificación Estratégica", href: "#servicios" },
  { name: "Marketing & Comunicaciones", href: "#servicios" },
  { name: "Diseño de Experiencias Turísticas", href: "#servicios" },
  { name: "Ecodiseño y Arquitectura", href: "#servicios" },
  { name: "Turismo Emprende", href: "#servicios" },
  { name: "Cursos y Capacitaciones", href: "#servicios" },
  { name: "Gestión de la Información Turística", href: "#servicios" },
];

const navLinks = [
  { name: "Sobre Mí", href: "#sobre-mi" },
  { name: "Educación", href: "#educacion" },
  { name: "Servicios", href: "#servicios", hasDropdown: true },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Comunidad  Turística", href: "#comunidad" },
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

      // Detect active section
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
        ? "bg-[#176ddd] shadow-glow-secondary py-3 rounded-full border border-white/20"
        : "bg-[#176ddd]/90 backdrop-blur-md py-4 rounded-[2rem] border border-white/10"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex flex-col group cursor-pointer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white font-black text-lg md:text-xl tracking-tighter font-display group-hover:text-white/80 transition-colors duration-300 drop-shadow-sm">
              Yesenia Cieza
            </span>
            <span className="text-white/80 font-black text-[7px] md:text-[8px] tracking-[0.3em] uppercase">
              Consultora turística
            </span>
          </motion.a>

          {/* Desktop Navigation */}
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
                  className={`px-3 py-2 font-black text-[12px] uppercase tracking-wider flex items-center gap-1.5 rounded-xl transition-all duration-300 ${activeSection === link.href.replace("#", "")
                    ? "text-white bg-white/20 shadow-sm"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                        }`}
                    />
                  )}
                </button>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-80 bg-[#176ddd] backdrop-blur-xl shadow-glow-secondary rounded-xl overflow-hidden mt-2 border border-white/20"
                      >
                        <div className="p-2">
                          {services.map((service, idx) => (
                            <motion.button
                              key={service.name}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.03 }}
                              onClick={() => handleNavClick(service.href)}
                              className="w-full px-4 py-3 text-left text-white/90 hover:bg-white/10 hover:text-white rounded-lg transition-all duration-200 text-sm flex items-center gap-3 group"
                            >
                              <span className="font-medium">{service.name}</span>
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
              className="ml-4"
            >
              <Button
                onClick={() => handleNavClick("#contacto")}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-2.5 rounded-xl shadow-glow-accent transition-all duration-300 hover:scale-105 active:scale-95 font-bold tracking-wide"
              >
                Solicitar Consultoría
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:hidden text-primary-foreground p-2 hover:bg-primary-foreground/10 rounded-lg transition-colors"
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
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 overflow-hidden"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="pt-4 space-y-1 border-t border-primary-foreground/10"
              >
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
                      className="w-full text-left px-4 py-3 text-primary-foreground hover:text-secondary hover:bg-primary-foreground/5 rounded-lg transition-all font-medium flex items-center justify-between"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""
                            }`}
                        />
                      )}
                    </button>
                    {link.hasDropdown && isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-white/5 rounded-lg mx-2 my-1 overflow-hidden"
                      >
                        {services.map((service) => (
                          <button
                            key={service.name}
                            onClick={() => handleNavClick(service.href)}
                            className="w-full px-5 py-3 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm flex items-center gap-2"
                          >
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
                  className="px-4 pt-4"
                >
                  <Button
                    onClick={() => handleNavClick("#contacto")}
                    className="w-full bg-accent hover:bg-accent/90 text-white font-bold shadow-glow-accent rounded-xl"
                    size="lg"
                  >
                    Solicitar Consultoría
                  </Button>
                </motion.div>
              </motion.div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}