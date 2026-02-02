import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Facebook,
  Send,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Urb. La Planicie Mz V Lote 10",
    subvalue: "San Martín - Tarapoto, Perú",
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    value: "+51 943 254 265",
    link: "https://wa.me/51943254265",
  },
  {
    icon: Mail,
    label: "Correo Electrónico",
    value: "consultorayeseniacieza@gmail.com",
    link: "mailto:consultorayeseniacieza@gmail.com",
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/51943254265?text=Hola,%20me%20interesa%20una%20consultoría%20en%20turismo%20sostenible",
      "_blank"
    );
  };

  return (
    <section id="contacto" className="py-20 md:py-32 bg-primary" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-wider uppercase">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            ¿Tienes un proyecto turístico en mente? Estamos aquí para ayudarte a 
            hacerlo realidad de manera sostenible.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-secondary/20 rounded-lg">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/60 text-sm mb-1">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-primary-foreground font-medium hover:text-secondary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <>
                        <p className="text-primary-foreground font-medium">
                          {item.value}
                        </p>
                        {item.subvalue && (
                          <p className="text-primary-foreground/70 text-sm">
                            {item.subvalue}
                          </p>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold flex-1"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button
                onClick={() => window.open("https://www.facebook.com", "_blank")}
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 flex-1"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </Button>
            </div>

            {/* Business Info */}
            <div className="bg-primary-foreground/5 rounded-xl p-6 border border-primary-foreground/10">
              <h3 className="text-primary-foreground font-bold mb-4">
                Información Empresarial
              </h3>
              <div className="space-y-2 text-primary-foreground/80 text-sm">
                <p><strong>RUC:</strong> 10464327377</p>
                <p><strong>Razón Social:</strong> Yesenia Cieza Consultores</p>
                <p><strong>Slogan:</strong> Capital por pensamiento creativo</p>
              </div>
              <div className="mt-4 pt-4 border-t border-primary-foreground/10">
                <p className="text-primary-foreground/60 text-xs italic">
                  "Proyectando ser los mejores Consultores turísticos del País"
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-elevated"
            >
              <h3 className="text-xl font-bold text-primary mb-6">
                Envíanos un Mensaje
              </h3>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre Completo
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-muted/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Correo Electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-muted/50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="bg-muted/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Enviando...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      ¡Enviado!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Enviar Mensaje
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}