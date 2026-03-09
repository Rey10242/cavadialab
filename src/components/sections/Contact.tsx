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
        form.setValue("message", `Hola, me interesa saber más sobre: "${service}". Me gustaría conversar sobre cómo pueden ayudarme.`);
        setShowForm(true);
        setTimeout(() => serviceSelection.clear(), 100);
      }
    });

    const currentService = serviceSelection.get();
    if (currentService) {
      form.setValue("message", `Hola, me interesa saber más sobre: "${currentService}". Me gustaría conversar sobre cómo pueden ayudarme.`);
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
      } catch (emailError) {
        console.error("Error sending email notification:", emailError);
      }

      setIsSubmitted(true);
      trackFormSubmit();
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
      <div className="container mx-auto px-4 md:px-8">
        {/* Centered header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <div className="section-label justify-center [&::after]:hidden">Da el paso</div>
          <h2 className="font-heading text-[clamp(3rem,7vw,6.5rem)] leading-[0.92] tracking-tight mb-4">
            ¿Listo para<br />vender <span className="text-primary">más</span>?
          </h2>
          <p className="font-serif italic text-base text-muted-foreground leading-relaxed">
            Agenda una conversación sin compromiso y veamos juntos cómo hacer crecer tu negocio con estrategia.
          </p>
        </motion.div>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-12"
        >
          <a
            href="https://wa.me/573246875354"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContactWhatsApp}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-body text-[0.78rem] font-bold tracking-wider rounded-full hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)] hover:-translate-y-0.5 transition-all"
          >
            Escríbeme por WhatsApp
          </a>
        </motion.div>

        {/* Expandable form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Form */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                      <CheckCircle className="w-10 h-10 text-primary" />
                    </div>
                    <h4 className="text-xl font-semibold mb-2">¡Mensaje Enviado!</h4>
                    <p className="text-muted-foreground text-sm">Te responderé lo antes posible.</p>
                  </motion.div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs">Nombre *</FormLabel>
                            <FormControl><Input placeholder="Tu nombre" {...field} className="rounded-xl bg-background border-border" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs">Email *</FormLabel>
                            <FormControl><Input type="email" placeholder="tu@email.com" {...field} className="rounded-xl bg-background border-border" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs flex items-center gap-1.5"><Phone className="w-3 h-3" /> Teléfono (opcional)</FormLabel>
                          <FormControl><Input type="tel" placeholder="+57 300 123 4567" {...field} className="rounded-xl bg-background border-border" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Mensaje *</FormLabel>
                          <FormControl><Textarea placeholder="Cuéntame brevemente tu situación..." rows={4} {...field} className="rounded-xl bg-background border-border" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <Button type="submit" className="w-full rounded-full btn-primary-glow" disabled={isSubmitting}>
                        {isSubmitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Enviando...</> : <><Send className="w-4 h-4 mr-2" />Enviar Mensaje</>}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>

              {/* Contact info */}
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
                <h3 className="font-heading text-xl text-foreground mb-4">Información</h3>
                <a href="mailto:rmontalvocavadia@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-background/50 transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"><Mail className="w-4 h-4 text-primary" /></div>
                  <div><p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">Email</p><p className="text-sm text-foreground">rmontalvocavadia@gmail.com</p></div>
                </a>
                <a href="https://wa.me/573246875354" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-background/50 transition-colors group">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"><Phone className="w-4 h-4 text-primary" /></div>
                  <div><p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">WhatsApp</p><p className="text-sm text-foreground">+57 324 687 5354</p></div>
                </a>
                <div className="flex items-center gap-3 p-3 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"><MapPin className="w-4 h-4 text-primary" /></div>
                  <div><p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">Ubicación</p><p className="text-sm text-foreground">Cartagena de Indias, Colombia 🇨🇴</p></div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/10">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center"><Clock className="w-4 h-4 text-primary" /></div>
                  <div><p className="text-[0.65rem] uppercase tracking-wider text-muted-foreground">Disponibilidad</p><p className="text-sm text-foreground">Lun - Vie: 9:00 AM - 6:00 PM (COT)</p></div>
                </div>

                {/* Social */}
                <div className="flex gap-2 pt-4 border-t border-border">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/rmontalvocavadia/", label: "LinkedIn" },
                    { icon: Instagram, href: "https://www.instagram.com/reynaldo.cavadia/", label: "Instagram" },
                    { icon: MessageCircle, href: "https://wa.me/573246875354", label: "WhatsApp" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
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
