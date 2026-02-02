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
  ArrowRight,
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
    <section id="contacto" className="py-24 md:py-32 bg-primary relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-semibold text-sm tracking-[0.2em] uppercase">
            Contáctanos
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-3 mb-6 font-display">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-primary-foreground/75 max-w-2xl mx-auto text-lg">
            ¿Tienes un proyecto turístico en mente? Estamos aquí para ayudarte a 
            hacerlo realidad de manera sostenible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-accent mx-auto rounded-full mt-8" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 hover:border-secondary/30 transition-colors"
                >
                  <div className="p-3 bg-secondary/20 rounded-xl">
                    <item.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-xs uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-primary-foreground font-semibold hover:text-secondary transition-colors text-lg"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <>
                        <p className="text-primary-foreground font-semibold text-lg">{item.value}</p>
                        {item.subvalue && (
                          <p className="text-primary-foreground/60 text-sm">{item.subvalue}</p>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-col gap-4 mb-10">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-soft hover:shadow-glow transition-all duration-300 btn-shine group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Escribir por WhatsApp
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
              <Button
                onClick={() => window.open("https://www.facebook.com", "_blank")}
                size="lg"
                variant="outline"
                className="w-full border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/30"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Seguir en Facebook
              </Button>
            </div>

            {/* Business Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-primary-foreground/5 rounded-2xl p-6 border border-primary-foreground/10"
            >
              <h3 className="text-primary-foreground font-bold mb-4 font-display">
                Información Empresarial
              </h3>
              <div className="space-y-2 text-primary-foreground/70 text-sm">
                <p><strong className="text-primary-foreground">RUC:</strong> 10464327377</p>
                <p><strong className="text-primary-foreground">Razón Social:</strong> Yesenia Cieza Consultores</p>
              </div>
              <div className="mt-4 pt-4 border-t border-primary-foreground/10">
                <p className="text-primary-foreground/50 text-xs italic font-display">
                  "Capital por pensamiento creativo"
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-3xl p-8 md:p-10 shadow-elevated"
            >
              <h3 className="text-2xl font-bold text-primary mb-2 font-display">
                Envíanos un Mensaje
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                Completa el formulario y te responderemos a la brevedad
              </p>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-muted/50 border-border focus:border-secondary h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-muted/50 border-border focus:border-secondary h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-muted/50 border-border focus:border-secondary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold h-14 text-base shadow-soft hover:shadow-glow transition-all duration-300 btn-shine"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-secondary-foreground/30 border-t-secondary-foreground rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      ¡Mensaje Enviado!
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