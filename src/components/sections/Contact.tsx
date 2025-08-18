import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { trackFormStart, trackFormSubmit, trackWhatsAppClick } from "@/lib/gtag";

const schema = z.object({
  name: z.string().min(2, "Ingresa tu nombre"),
  email: z.string().email("Correo inválido"),
  whatsapp: z.string().min(7, "Número inválido"),
  website: z.string().url("URL inválida").optional().or(z.literal("")),
  message: z.string().min(10, "Cuéntanos un poco más"),
});

type FormValues = z.infer<typeof schema>;

const Contact: React.FC = () => {
  const form = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", whatsapp: "", website: "", message: "" } });

  const onSubmit = (values: FormValues) => {
    trackFormSubmit();
    const subject = encodeURIComponent("Plan de crecimiento CavadiaLab: desbloquear ventas");
    const body = encodeURIComponent(
      `Nombre: ${values.name}\nEmail: ${values.email}\nWhatsApp: ${values.whatsapp}\nSitio: ${values.website || "-"}\n\nMensaje:\n${values.message}`
    );
    window.location.href = `mailto:reynaldo@cavadialab.com?subject=${subject}&body=${body}`;
  };

  const waText = encodeURIComponent("Hola Reynaldo, quiero conversar sobre tu plan para desbloquear mis ventas (30 min). ¿Tienes disponibilidad esta semana?");

  return (
    <section id="contacto" className="border-t border-border/60 scroll-mt-24 section-padding bg-muted/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 rounded-2xl border border-border/60 bg-gradient-card p-8 text-center card-soft">
          <h2 className="heading-tertiary mb-4">Reynaldo Montalvo Cavadia</h2>
          <p className="text-lg text-foreground/90 leading-relaxed">Experto en desarrollo de presencia online (web y SEO), Google Ads, Meta Ads, y automatización de WhatsApp con IA. Experto en performance y tracking (GA4/GTM), maximizando resultados con un ROAS objetivo: +10x. <span className="font-semibold text-primary">ROAS objetivo: +10x.</span></p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-4 sm:p-6 lg:p-8 card-soft">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">Nombre</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Tu nombre" 
                          className="h-12 rounded-xl border-border/60 focus:border-primary transition-colors" 
                          onFocus={trackFormStart}
                          {...field} 
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
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">Email</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="tu@email.com" 
                          className="h-12 rounded-xl border-border/60 focus:border-primary transition-colors" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">WhatsApp</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Tu número" 
                          className="h-12 rounded-xl border-border/60 focus:border-primary transition-colors" 
                          {...field} 
                        />
                      </FormControl>
                      <FormDescription className="text-xs text-muted-foreground">
                        Solo para coordinar la sesión.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">Sitio web (opcional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="https://" 
                          className="h-12 rounded-xl border-border/60 focus:border-primary transition-colors" 
                          {...field} 
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
                    <FormItem className="space-y-2">
                      <FormLabel className="text-sm font-medium text-foreground">Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntanos sobre tu negocio y objetivos" 
                          rows={5} 
                          className="rounded-xl border-border/60 focus:border-primary transition-colors resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-3 pt-4 lg:flex-row lg:gap-4">
                  <Button type="submit" variant="premium" size="lg" className="w-full lg:flex-1 h-12">
                    Solicitar plan de crecimiento
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full lg:flex-1 h-12 shrink-0">
                    <a 
                      href={`https://wa.me/?text=${waText}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={trackWhatsAppClick}
                      className="inline-flex items-center justify-center"
                    >
                      Hablar por WhatsApp
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center pt-2">
                  Al enviar aceptas ser contactado para coordinar la llamada. No compartimos tus datos.
                </p>
              </form>
            </Form>
          </div>

        <aside className="rounded-2xl border border-border/60 bg-card p-4 sm:p-6 lg:p-8 card-soft">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <h3 className="heading-tertiary">¿Qué incluye la sesión?</h3>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-foreground/90 leading-relaxed">Auditoría express del embudo y canales</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-foreground/90 leading-relaxed">Quick wins aplicables en 7-14 días</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-foreground/90 leading-relaxed">Plan de 90 días enfocado en desbloquear ventas</span>
            </li>
          </ul>
        </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
