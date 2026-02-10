import { forwardRef } from "react";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = forwardRef<HTMLElement>((_, ref) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="bg-primary text-white relative overflow-hidden border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-20 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-black text-3xl mb-4 font-display tracking-tighter drop-shadow-sm">Yesenia Cieza Consultores</h3>
            <p className="text-white/70 text-base mb-6 max-w-sm leading-relaxed">
              Consultora Integral de Proyectos Turísticos. Más de 13 años transformando
              el turismo peruano con soluciones sostenibles y alto impacto social.
            </p>
            <p className="text-secondary font-black italic font-display text-lg tracking-tight">
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
            <h4 className="font-black text-xl mb-6 font-display text-secondary uppercase tracking-widest text-sm">Síguenos</h4>
            <div className="flex gap-4 mb-8">
              {[
                { icon: Facebook, href: "https://www.facebook.com/YeseniaCiezaConsultora", label: "Facebook" },
                { icon: Instagram, href: "https://www.instagram.com/yeseniacieza", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/yeseniacieza", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-4 bg-white/5 rounded-2xl hover:bg-secondary/20 hover:text-white transition-all duration-300 border border-white/10 hover:border-secondary shadow-soft"
                >
                  <social.icon className="w-6 h-6" />
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