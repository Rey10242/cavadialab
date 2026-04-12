import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle, CheckCircle, Loader2, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { serviceSelection } from "@/hooks/useServiceSelection";
import { trackContactWhatsApp, trackContactFormOpen, trackFormSubmit } from "@/lib/gtag";

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "Nombre muy largo"),
  email: z.string().trim().email("Email inválido").max(255, "Email muy largo"),
  phone: z.string().trim().max(20, "Teléfono muy largo").optional().or(z.literal("")),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "Mensaje muy largo"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  useEffect(() => {
    const unsubscribe = serviceSelection.subscribe((service) => {
      if (service) {
        form.setValue("message", `Hola, me interesa saber más sobre: "${service}".`);
        setShowForm(true);
        setTimeout(() => serviceSelection.clear(), 100);
      }
    });
    const currentService = serviceSelection.get();
    if (currentService) {
      form.setValue("message", `Hola, me interesa saber más sobre: "${currentService}".`);
      setShowForm(true);
      setTimeout(() => serviceSelection.clear(), 100);
    }
    return () => { unsubscribe(); };
  }, [form]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({ name: data.name, email: data.email, phone: data.phone || null, message: data.message });
      if (error) throw error;
      try {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
        await fetch(`${supabaseUrl}/functions/v1/notify-contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json", "Authorization": `Bearer ${supabaseKey}` },
          body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone || undefined, message: data.message }),
        });
      } catch (emailError) { console.error("Error sending email notification:", emailError); }
      setIsSubmitted(true);
      trackFormSubmit();
      toast.success("¡Mensaje enviado!");
      form.reset();
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Error al enviar. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-12"
        >
          <div className="section-label">Contacto</div>
          <h2 className="font-heading text-[clamp(2.2rem,7vw,6.5rem)] leading-[0.9] tracking-tight mb-4">
            ¿Listo para<br />vender <span className="text-primary">más</span>?
          </h2>
          <p className="font-serif italic text-base text-muted-foreground">
            Sin compromiso. Sin presión. Solo una conversación para ver si tiene sentido trabajar juntos.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-3 mb-12"
        >
          <a
            href="https://wa.me/573246875354"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContactWhatsApp}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-body text-[0.72rem] font-bold tracking-wider hover:brightness-110 hover:-translate-y-0.5 transition-all"
          >
            Escríbeme por WhatsApp
          </a>
          <button
            onClick={() => { setShowForm(!showForm); trackContactFormOpen(); }}
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-body text-[0.72rem] font-bold tracking-wider hover:border-primary hover:text-primary transition-all"
          >
            {showForm ? "Cerrar formulario" : "Enviar mensaje"}
          </button>
        </motion.div>

        {/* Expandable form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl"
          >
            <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
              {/* Form */}
              <div className="bg-card p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-10 h-10 text-primary mb-4" />
                    <h4 className="font-heading text-xl text-foreground mb-2">Mensaje Enviado</h4>
                    <p className="text-sm text-muted-foreground">Te responderé lo antes posible.</p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[0.62rem] font-bold tracking-wider uppercase">Nombre *</FormLabel>
                            <FormControl><Input placeholder="Tu nombre" {...field} className="bg-background border-border rounded-none" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-[0.62rem] font-bold tracking-wider uppercase">Email *</FormLabel>
                            <FormControl><Input type="email" placeholder="tu@email.com" {...field} className="bg-background border-border rounded-none" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[0.62rem] font-bold tracking-wider uppercase">Teléfono (opcional)</FormLabel>
                          <FormControl><Input type="tel" placeholder="+57 300 123 4567" {...field} className="bg-background border-border rounded-none" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[0.62rem] font-bold tracking-wider uppercase">Mensaje *</FormLabel>
                          <FormControl><Textarea placeholder="Cuéntame brevemente tu situación..." rows={4} {...field} className="bg-background border-border rounded-none" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <button type="submit" className="w-full py-3 bg-primary text-primary-foreground text-[0.72rem] font-bold tracking-wider uppercase hover:brightness-110 transition-all disabled:opacity-50" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje →"}
                      </button>
                    </form>
                  </Form>
                )}
              </div>

              {/* Contact info */}
              <div className="bg-card p-6 md:p-8 space-y-4">
                <h3 className="font-heading text-xl text-foreground mb-4">Información</h3>
                <a href="mailto:rmontalvocavadia@gmail.com" className="flex items-center gap-3 p-3 hover:bg-background/50 transition-colors group">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-[0.58rem] font-bold tracking-wider uppercase text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground">rmontalvocavadia@gmail.com</p>
                  </div>
                </a>
                <a href="https://wa.me/573246875354" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-background/50 transition-colors group">
                  <Phone className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-[0.58rem] font-bold tracking-wider uppercase text-muted-foreground">WhatsApp</p>
                    <p className="text-sm text-foreground">+57 324 687 5354</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 p-3">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-[0.58rem] font-bold tracking-wider uppercase text-muted-foreground">Ubicación</p>
                    <p className="text-sm text-foreground">Cartagena, Colombia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border">
                  <Clock className="w-4 h-4 text-primary shrink-0" />
                  <div>
                    <p className="text-[0.58rem] font-bold tracking-wider uppercase text-muted-foreground">Disponibilidad</p>
                    <p className="text-sm text-foreground">Lun - Vie: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex gap-2 pt-4 border-t border-border">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/rmontalvocavadia/", label: "LinkedIn" },
                    { icon: Instagram, href: "https://www.instagram.com/reynaldo.cavadia/", label: "Instagram" },
                    { icon: MessageCircle, href: "https://wa.me/573246875354", label: "WhatsApp" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={s.label}>
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Contact;
