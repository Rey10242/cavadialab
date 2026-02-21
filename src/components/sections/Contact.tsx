import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, CheckCircle, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { serviceSelection } from "@/hooks/useServiceSelection";

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "Nombre muy largo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muy largo"),
  phone: z.string().trim().max(20, "Teléfono muy largo").optional().or(z.literal("")),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "Mensaje muy largo"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rmontalvocavadia/", label: "LinkedIn", hoverColor: "hover:bg-blue-600/10 hover:border-blue-600/30 hover:text-blue-500" },
  { icon: Instagram, href: "https://www.instagram.com/reynaldo.cavadia/", label: "Instagram", hoverColor: "hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-500" },
  { icon: MessageCircle, href: "https://wa.me/573246875354", label: "WhatsApp", hoverColor: "hover:bg-green-500/10 hover:border-green-500/30 hover:text-green-500" },
];

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    const unsubscribe = serviceSelection.subscribe((service) => {
      if (service) {
        form.setValue("message", `Hola, me interesa saber más sobre: "${service}". Me gustaría conversar sobre cómo pueden ayudarme.`);
        setTimeout(() => serviceSelection.clear(), 100);
      }
    });

    const currentService = serviceSelection.get();
    if (currentService) {
      form.setValue("message", `Hola, me interesa saber más sobre: "${currentService}". Me gustaría conversar sobre cómo pueden ayudarme.`);
      setTimeout(() => serviceSelection.clear(), 100);
    }

    return () => { unsubscribe(); };
  }, [form]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          message: data.message,
        });

      if (error) throw error;

      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        
        await fetch(`${supabaseUrl}/functions/v1/notify-contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${supabaseKey}`,
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            phone: data.phone || undefined,
            message: data.message,
          }),
        });
      } catch (emailError) {
        console.error("Error sending email notification:", emailError);
      }

      setIsSubmitted(true);
      toast.success("¡Mensaje enviado! Te contactaré pronto.");
      form.reset();
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      {/* Mesh gradient bg */}
      <div className="absolute inset-0 bg-mesh opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-muted/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para crecer{" "}
            <span className="text-gradient">con estructura?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Agenda una llamada y revisamos tu situación sin compromiso.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-stretch">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 relative overflow-hidden h-full flex flex-col">
              {focusedField && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                </div>
              )}

              <h3 className="text-lg font-semibold mb-6">Escríbeme directamente</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">¡Mensaje Enviado!</h4>
                  <p className="text-muted-foreground">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                </motion.div>
              ) : (
              <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex-1 flex flex-col">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombre *</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Tu nombre" 
                                {...field} 
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField(null)}
                                className={`rounded-xl transition-all duration-300 ${focusedField === "name" ? "ring-2 ring-primary/30 border-primary shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]" : ""}`}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email" 
                                placeholder="tu@email.com" 
                                {...field} 
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField(null)}
                                className={`rounded-xl transition-all duration-300 ${focusedField === "email" ? "ring-2 ring-primary/30 border-primary shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]" : ""}`}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                            Teléfono (opcional)
                          </FormLabel>
                          <FormControl>
                            <Input 
                              type="tel" 
                              placeholder="+57 300 123 4567" 
                              {...field} 
                              onFocus={() => setFocusedField("phone")}
                              onBlur={() => setFocusedField(null)}
                              className={`rounded-xl transition-all duration-300 ${focusedField === "phone" ? "ring-2 ring-primary/30 border-primary shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]" : ""}`}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Cuéntame brevemente tu situación..."
                              rows={5}
                              {...field}
                              onFocus={() => setFocusedField("message")}
                              onBlur={() => setFocusedField(null)}
                              className={`rounded-xl transition-all duration-300 ${focusedField === "message" ? "ring-2 ring-primary/30 border-primary shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)]" : ""}`}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex-1" />
                    
                    {/* Two CTAs: form submit + WhatsApp */}
                    <div className="space-y-3 mt-auto">
                      <Button
                        type="submit"
                        className="w-full btn-primary-glow"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Enviando...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Enviar Mensaje
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full border-green-500/30 text-green-500 hover:bg-green-500/10 hover:text-green-400"
                        onClick={() => window.open("https://wa.me/573246875354", "_blank")}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        O escríbeme por WhatsApp
                      </Button>
                    </div>
                  </form>
                </Form>
              )}
            </div>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6 h-full"
          >
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 flex-1">
              <h3 className="text-lg font-semibold mb-6">Información de Contacto</h3>
              
              <div className="space-y-3">
                <a
                  href="mailto:rmontalvocavadia@gmail.com"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">rmontalvocavadia@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/573246875354"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="text-foreground group-hover:text-primary transition-colors">+57 324 687 5354</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="text-foreground">Cartagena de Indias, Colombia 🇨🇴</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Disponibilidad</p>
                    <p className="text-foreground">Lun - Vie: 9:00 AM - 6:00 PM (COT)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Sígueme en Redes</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 p-4 rounded-xl bg-muted/30 border border-transparent transition-all duration-300 group ${social.hoverColor}`}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-current transition-colors" />
                    <span className="text-foreground group-hover:text-current transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
