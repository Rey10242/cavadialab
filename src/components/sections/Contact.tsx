import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, CheckCircle, Loader2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "Nombre muy largo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muy largo"),
  phone: z.string().trim().max(20, "Teléfono muy largo").optional().or(z.literal("")),
  location: z.string().trim().max(100, "Ubicación muy larga").optional().or(z.literal("")),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "Mensaje muy largo"),
  projectType: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const projectTypes = [
  { value: "marketing", label: "Marketing Digital" },
  { value: "automation", label: "Automatización" },
  { value: "web", label: "Desarrollo Web" },
  { value: "consulting", label: "Consultoría" },
  { value: "other", label: "Otro" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/rmontalvocavadia/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/reynaldo.cavadia/", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/573246875354", label: "WhatsApp" },
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
      location: "",
      message: "",
      projectType: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({
          name: data.name,
          email: data.email,
          phone: data.phone || null,
          location: data.location || null,
          message: data.message,
          project_type: data.projectType || null,
        });

      if (error) throw error;

      setIsSubmitted(true);
      toast.success("¡Mensaje enviado! Te contactaré pronto.");
      form.reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Error al enviar el mensaje. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contáctame</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevos proyectos.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card border border-border rounded-xl p-6 md:p-8 relative overflow-hidden">
              {/* Spotlight effect */}
              {focusedField && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
                </div>
              )}

              <h3 className="text-xl font-semibold mb-6">Envíame un mensaje</h3>
              
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    {/* Row 1: Name & Email */}
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
                                className={`transition-all duration-300 ${focusedField === "name" ? "ring-2 ring-primary/30 border-primary" : ""}`}
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
                                className={`transition-all duration-300 ${focusedField === "email" ? "ring-2 ring-primary/30 border-primary" : ""}`}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 2: Phone & Location */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1.5">
                              <Phone className="w-3.5 h-3.5 text-muted-foreground" />
                              Teléfono
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="tel" 
                                placeholder="+57 300 123 4567" 
                                {...field} 
                                onFocus={() => setFocusedField("phone")}
                                onBlur={() => setFocusedField(null)}
                                className={`transition-all duration-300 ${focusedField === "phone" ? "ring-2 ring-primary/30 border-primary" : ""}`}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
                              País / Ciudad
                            </FormLabel>
                            <FormControl>
                              <Input 
                                type="text" 
                                placeholder="Ej: Colombia, Bogotá" 
                                {...field} 
                                onFocus={() => setFocusedField("location")}
                                onBlur={() => setFocusedField(null)}
                                className={`transition-all duration-300 ${focusedField === "location" ? "ring-2 ring-primary/30 border-primary" : ""}`}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Proyecto (opcional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona una opción" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mensaje</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Cuéntame sobre tu proyecto..."
                              rows={5}
                              {...field}
                              onFocus={() => setFocusedField("message")}
                              onBlur={() => setFocusedField(null)}
                              className={`transition-all duration-300 ${focusedField === "message" ? "ring-2 ring-primary/30 border-primary" : ""}`}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
            className="space-y-6"
          >
            {/* Contact Info */}
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Información de Contacto</h3>
              
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
            <div className="bg-card border border-border rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6">Sígueme en Redes</h3>
              
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all group"
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA con pulso - Centrado */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-6 md:p-8 text-center relative overflow-hidden"
        >
          {/* Pulse effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent animate-pulse pointer-events-none" />
          
          <h3 className="text-xl font-semibold mb-3 relative z-10">¿Listo para empezar?</h3>
          <p className="text-muted-foreground mb-4 relative z-10">
            Agenda una llamada gratuita de 30 minutos para discutir tu proyecto.
          </p>
          <Button
            size="lg"
            className="btn-primary-glow relative z-10"
            onClick={() => window.open("https://wa.me/573246875354", "_blank")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Agendar Llamada
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
