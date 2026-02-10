import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import whatsappIcon from "@/assets/iconos/whatsapp.svg";

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
    <section id="contacto" className="py-24 md:py-32 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration - Subtle and Professional */}
      <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-5 mix-blend-multiply" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[150px] translate-x-1/2 -translate-y-1/2 animate-pulse-soft" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[180px]" />

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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mt-3 mb-6 font-display">
            Hablemos de tu Proyecto
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto text-lg font-medium">
            ¿Tienes un proyecto turístico en mente? Estamos aquí para ayudarte a
            hacerlo realidad de manera sostenible.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-[#176ddd] mx-auto rounded-full mt-8" />
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
                  className="flex items-start gap-6 p-6 rounded-[2rem] bg-muted/30 border border-primary/5 hover:border-secondary/50 hover:bg-muted/50 transition-all duration-300 group"
                >
                  <div className="p-4 bg-secondary/10 rounded-2xl group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <div>
                    <p className="text-secondary font-black text-[10px] uppercase tracking-[0.2em] mb-2">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-primary font-black hover:text-secondary transition-colors text-lg font-display"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <>
                        <p className="text-primary font-black text-lg font-display">{item.value}</p>
                        {item.subvalue && (
                          <p className="text-primary/60 text-sm mt-1">{item.subvalue}</p>
                        )}
                      </>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Contact Buttons - Horizontal & Optimized */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 items-center lg:items-stretch">
              <Button
                onClick={handleWhatsAppClick}
                size="lg"
                className="w-full sm:flex-1 bg-[#22c55e] hover:bg-[#22c55e]/90 text-white border-none shadow-glow-accent px-6 py-7 text-base rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <img src={whatsappIcon} alt="" className="w-5 h-5 mr-3 brightness-0 invert" />
                WhatsApp
              </Button>
              <Button
                onClick={() => window.open("https://www.facebook.com/YeseniaCiezaConsultora", "_blank")}
                size="lg"
                className="w-full sm:flex-1 bg-[#176ddd] hover:bg-[#176ddd]/90 text-white border-none shadow-glow-secondary px-6 py-7 text-base rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Facebook
              </Button>
            </div>

            {/* Business Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="bg-muted/30 rounded-2xl p-6 border border-primary/5"
            >
              <h3 className="text-primary font-bold mb-4 font-display">
                Información Empresarial
              </h3>
              <div className="space-y-2 text-primary/70 text-sm">
                <p><strong className="text-primary">RUC:</strong> 10464327377</p>
                <p><strong className="text-primary">Razón Social:</strong> Yesenia Cieza Consultores</p>
              </div>
              <div className="mt-4 pt-4 border-t border-primary/10">
                <p className="text-primary/40 text-xs italic font-display">
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
              className="bg-card rounded-3xl p-8 md:p-10 shadow-elevated border border-primary/5"
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
                    <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                      Nombre Completo
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-card border-white/50 focus:border-secondary text-primary h-12"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                      Correo Electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-card border-white/50 focus:border-secondary text-primary h-12"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="bg-card border-white/50 focus:border-secondary text-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-premium h-16 text-lg rounded-2xl shadow-glow-secondary"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                      Enviando...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6" />
                      ¡Mensaje Enviado!
                    </span>
                  ) : (
                    <span className="flex items-center gap-3">
                      <Send className="w-6 h-6" />
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