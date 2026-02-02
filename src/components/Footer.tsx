import { forwardRef } from "react";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="bg-foreground text-background relative">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-2xl mb-2 font-display">Yesenia Cieza Consultores</h3>
            <p className="text-background/60 text-sm mb-4 max-w-sm">
              Consultora Integral de Proyectos Turísticos. Más de 13 años transformando 
              el turismo peruano con soluciones sostenibles.
            </p>
            <p className="text-secondary text-sm italic font-display">
              "Capital por pensamiento creativo"
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5">Contacto</h4>
            <div className="space-y-4 text-sm text-background/70">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-secondary transition-colors"
              >
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                <span>Urb. La Planicie Mz V Lote 10, San Martín - Tarapoto</span>
              </a>
              <a 
                href="tel:+51943254265" 
                className="flex items-center gap-3 hover:text-secondary transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>+51 943 254 265</span>
              </a>
              <a
                href="mailto:consultorayeseniacieza@gmail.com"
                className="flex items-center gap-3 hover:text-secondary transition-colors"
              >
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <span>consultorayeseniacieza@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-bold text-lg mb-5">Síguenos</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-3 bg-background/5 rounded-xl hover:bg-secondary/20 hover:text-secondary transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-background/50 text-xs space-y-1">
              <p><strong className="text-background/70">RUC:</strong> 10464327377</p>
              <p>San Martín, Perú</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm text-center md:text-left">
            © {currentYear} Yesenia Cieza Consultores. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-background/30 text-xs">
              Consultoría en Turismo Sostenible | Perú
            </span>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3 }}
              className="p-2 bg-background/5 rounded-lg hover:bg-secondary/20 transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5 text-background/50 hover:text-secondary transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;