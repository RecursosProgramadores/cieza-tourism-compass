import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { id: "3.1", name: "Asesoría Técnica en Gestión Turística", href: "#servicios" },
  { id: "3.2", name: "Planificación Estratégica", href: "#servicios" },
  { id: "3.3", name: "Marketing & Comunicaciones", href: "#servicios" },
  { id: "3.4", name: "Diseño de Experiencias Turísticas", href: "#servicios" },
  { id: "3.5", name: "Ecodiseño y Arquitectura", href: "#servicios" },
  { id: "3.6", name: "Turismo Emprende", href: "#servicios" },
  { id: "3.7", name: "Cursos y Capacitaciones", href: "#servicios" },
  { id: "3.8", name: "Gestión de la Información Turística", href: "#servicios" },
];

const navLinks = [
  { name: "Sobre Mi", href: "#sobre-mi" },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-md shadow-elevated py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="flex flex-col"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary-foreground font-bold text-lg md:text-xl tracking-tight">
              Yesenia Cieza
            </span>
            <span className="text-secondary text-xs md:text-sm font-medium">
              Consultores
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsServicesOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-primary-foreground/90 hover:text-secondary transition-colors font-medium text-sm flex items-center gap-1"
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-80 bg-card shadow-elevated rounded-lg overflow-hidden mt-1 border border-border"
                      >
                        <div className="py-2">
                          {services.map((service) => (
                            <button
                              key={service.id}
                              onClick={() => handleNavClick(service.href)}
                              className="w-full px-4 py-3 text-left text-foreground/80 hover:bg-secondary/10 hover:text-secondary transition-colors text-sm"
                            >
                              <span className="text-secondary font-semibold mr-2">
                                {service.id}
                              </span>
                              {service.name}
                            </button>
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
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                onClick={() => handleNavClick("#contacto")}
                className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                Contáctanos
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-primary-foreground/20"
            >
              <div className="pt-4 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <button
                      onClick={() => {
                        if (link.hasDropdown) {
                          setIsServicesOpen(!isServicesOpen);
                        } else {
                          handleNavClick(link.href);
                        }
                      }}
                      className="w-full text-left px-4 py-3 text-primary-foreground hover:text-secondary transition-colors font-medium flex items-center justify-between"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {link.hasDropdown && isServicesOpen && (
                      <div className="bg-primary-foreground/5 rounded-lg mx-2 mb-2">
                        {services.map((service) => (
                          <button
                            key={service.id}
                            onClick={() => handleNavClick(service.href)}
                            className="w-full px-6 py-2 text-left text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                          >
                            <span className="text-secondary font-semibold mr-2">
                              {service.id}
                            </span>
                            {service.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-2">
                  <Button
                    onClick={() => handleNavClick("#contacto")}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                  >
                    Contáctanos
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}