import { forwardRef } from "react";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = forwardRef<HTMLButtonElement>((_, ref) => {
  const handleClick = () => {
    window.open(
      "https://wa.me/51943254265?text=Hola,%20me%20interesa%20una%20consultoría%20en%20turismo%20sostenible",
      "_blank"
    );
  };

  return (
    <motion.button
      ref={ref}
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 15 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent/90 text-accent-foreground p-4 rounded-full shadow-elevated hover:shadow-glow flex items-center gap-3 group transition-all duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-32 transition-all duration-300 whitespace-nowrap font-semibold text-sm">
        WhatsApp
      </span>
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
    </motion.button>
  );
});

WhatsAppButton.displayName = "WhatsAppButton";

export default WhatsAppButton;