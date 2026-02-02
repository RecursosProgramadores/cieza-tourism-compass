import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-2">Yesenia Cieza Consultores</h3>
            <p className="text-background/70 text-sm mb-4">
              Consultora Integral de Proyectos Turísticos
            </p>
            <p className="text-background/60 text-xs italic">
              "Capital por pensamiento creativo"
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span>Urb. La Planicie Mz V Lote 10, San Martín</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+51943254265" className="hover:text-secondary transition-colors">
                  +51 943 254 265
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <a
                  href="mailto:consultorayeseniacieza@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  consultorayeseniacieza@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-secondary/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-secondary/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-background/10 rounded-lg hover:bg-secondary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <p className="text-background/60 text-xs">
              RUC: 10464327377
            </p>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Yesenia Cieza Consultores. Todos los derechos reservados.
          </p>
          <p className="text-background/40 text-xs">
            Consultoría en Turismo Sostenible | Perú
          </p>
        </div>
      </div>
    </footer>
  );
}