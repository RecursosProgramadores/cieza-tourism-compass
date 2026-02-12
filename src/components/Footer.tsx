import { forwardRef } from "react";
import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

import logoDeveloper from "@/assets/iconos/logo.svg";
import imgLibro from "@/assets/iconos/libroreclamaciones.jpeg";

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
            <p className="text-secondary font-black italic font-display text-lg tracking-tight mb-6">
              "Capital por pensamiento creativo"
            </p>
            <motion.a
              href="https://forms.gle/YaXB1nhvNkimJGUT7"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block group"
            >
              <img
                src={imgLibro}
                alt="Libro de Reclamaciones"
                className="h-16 w-auto rounded-xl shadow-lg border border-white/10 group-hover:border-secondary/30 transition-all duration-300"
              />
            </motion.a>
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
      <div className="border-t border-background/10 bg-black/20">
        <div className="container mx-auto px-4 lg:px-8 py-10 relative">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Row 1: Copyright & Subtitle */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
              <p className="text-background/50 text-sm">
                © {currentYear} Yesenia Cieza Consultores. Todos los derechos reservados.
              </p>
              <span className="hidden md:block w-px h-4 bg-background/10" />
              <span className="text-background/30 text-xs uppercase tracking-wider font-semibold">
                Consultoría en Turismo Sostenible | Perú
              </span>
            </div>

            {/* Row 2: Developed by */}
            <motion.a
              href="https://fly-software.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 group"
            >
              <span className="text-background/40 text-[10px] uppercase tracking-[0.2em] font-black group-hover:text-secondary transition-colors">Desarrollado por</span>
              <img
                src={logoDeveloper}
                alt="Logo Empresa Desarrolladora"
                className="h-7 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300 invert brightness-0 hover:filter-none"
              />
            </motion.a>
          </div>

          {/* Floating Action: Back to Top */}
          <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:right-8">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-secondary/10 rounded-2xl hover:bg-secondary/30 transition-all duration-300 border border-white/5 shadow-glomo flex items-center justify-center group"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;