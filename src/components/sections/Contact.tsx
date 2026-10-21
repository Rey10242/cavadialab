import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/content/site";
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
  const [submissionError, setSubmissionError] = useState("");
  const [notificationSent, setNotificationSent] = useState(false);

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
    setSubmissionError("");
    try {
      const { error } = await supabase
        .from("contact_submissions")
        .insert({ name: data.name, email: data.email, phone: data.phone || null, message: data.message });
      if (error) throw error;
      let notified = false;
      try {
        const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/notify-contact`, {
          method: "POST", headers: { "Content-Type": "application/json", "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}` },
          body: JSON.stringify({ name: data.name, email: data.email, phone: data.phone || undefined, message: data.message }),
        });
        const result = await response.json();
        notified = response.ok && result.success === true;
      } catch { /* Storage succeeded; notification remains unconfirmed. Do not retry the insert. */ }
      setNotificationSent(notified);
      setIsSubmitted(true);
      trackFormSubmit();
      toast.success("Tu solicitud quedó guardada.");
      form.reset();

    } catch (error) {
      setSubmissionError("No pudimos guardar tu mensaje. Intenta de nuevo o escríbeme por WhatsApp.");
      toast.error("Error al enviar. Intenta de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      <div className="page-shell">
        <div className="max-w-2xl mb-12"
        >
          <div className="section-label">Contacto</div>
          <h2 className="section-title">
            Tu próximo paso<br /><span className="text-primary">empieza aquí.</span>
          </h2>
          <p className="font-serif italic text-base text-muted-foreground">
            Cuéntame qué quieres resolver. Revisemos si publicidad, medición o tecnología son el siguiente paso para tu negocio.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12"
        >
          <Button asChild variant="whatsapp"><a
            href={whatsappUrl("mi proyecto y sus necesidades")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackContactWhatsApp}
            
          >
            Hablemos de tu proyecto <MessageCircle className="w-4 h-4" />
          </a></Button>
          <Button variant="outline" aria-expanded={showForm} aria-controls="contact-form"
            onClick={() => { setShowForm(!showForm); if (!showForm) trackContactFormOpen(); }}
          >
            {showForm ? "Cerrar formulario" : "Enviar mensaje"}
          </Button>
        </div>

        {/* Expandable form */}
        {showForm && (
          <div id="contact-form" className="max-w-5xl"
          >
            <div className="grid lg:grid-cols-2 gap-px bg-border border border-border">
              {/* Form */}
              <div className="bg-card p-6 md:p-8">
                {isSubmitted ? (
                  <div
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-10 h-10 text-primary mb-4" />
                    <h3 className="font-heading text-2xl text-foreground mb-2">Solicitud guardada</h3>
                    <p role="status" className="text-base text-muted-foreground">{notificationSent ? "Tu solicitud quedó guardada y la notificación se envió." : "Tu solicitud quedó guardada, pero no pudimos confirmar la notificación por correo. Puedes contactarme por WhatsApp; no necesitas reenviar el formulario."}</p><Button variant="outline" className="mt-5" onClick={() => setIsSubmitted(false)}>Enviar otra solicitud</Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                      {submissionError && <p role="alert" className="text-destructive">{submissionError}</p>}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold">Nombre *</FormLabel>
                            <FormControl><Input placeholder="Tu nombre" {...field} className="bg-background border-border rounded-none" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-semibold">Email *</FormLabel>
                            <FormControl><Input type="email" placeholder="tu@email.com" {...field} className="bg-background border-border rounded-none" /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">Teléfono (opcional)</FormLabel>
                          <FormControl><Input type="tel" placeholder="Tu número de contacto" {...field} className="bg-background border-border rounded-none" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-semibold">Mensaje *</FormLabel>
                          <FormControl><Textarea placeholder="Cuéntame brevemente tu situación..." rows={4} {...field} className="bg-background border-border rounded-none" /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />
                      <Button type="submit" className="w-full py-3 bg-primary text-primary-foreground text-[0.72rem] font-bold tracking-wider uppercase hover:brightness-110 transition-all disabled:opacity-50" disabled={isSubmitting}>
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje →"}
                      </Button>
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
                    <p className="text-sm text-foreground break-all">rmontalvocavadia@gmail.com</p>
                  </div>
                </a>
                <a href={whatsappUrl("mi proyecto y sus necesidades")} onClick={() => trackContactWhatsApp()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-background/50 transition-colors group">
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

                <div className="flex gap-2 pt-4 border-t border-border">
                  {[
                    { icon: Linkedin, href: "https://www.linkedin.com/in/rmontalvocavadia/", label: "LinkedIn" },
                    { icon: Instagram, href: "https://www.instagram.com/reynaldo.cavadia/", label: "Instagram" },
                    { icon: MessageCircle, href: "https://wa.me/573246875354", label: "WhatsApp" },
                  ].map((s) => (
                    <a key={s.label} href={s.label === "WhatsApp" ? whatsappUrl("mi proyecto") : s.href} onClick={() => { if (s.label === "WhatsApp") trackContactWhatsApp(); }} target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                      aria-label={s.label}>
                      <s.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
