import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

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
    const subject = encodeURIComponent("Plan de crecimiento CavadiaLab: desbloquear ventas");
    const body = encodeURIComponent(
      `Nombre: ${values.name}\nEmail: ${values.email}\nWhatsApp: ${values.whatsapp}\nSitio: ${values.website || "-"}\n\nMensaje:\n${values.message}`
    );
    window.location.href = `mailto:reynaldo@cavadialab.com?subject=${subject}&body=${body}`;
  };

  const waText = encodeURIComponent("Hola Reynaldo, quiero conversar sobre tu plan para desbloquear mis ventas (30 min). ¿Tienes disponibilidad esta semana?");

  return (
    <section id="contacto" className="border-t border-border/60 scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-10 text-center animate-fade-in">
          <h2 className="text-3xl font-bold">Plan de crecimiento: desbloquea tus ventas</h2>
          <p className="mt-2 text-muted-foreground">Diagnóstico express, quick wins y un plan de 90 días para salir del estancamiento.</p>
        </header>

        <div className="mb-8 rounded-xl border border-border/60 bg-card p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">¿Quién te guía?</h2>
          <p className="text-foreground/90">Reynaldo Montalvo – Full-stack marketer especializado en performance, tracking (GA4/GTM) y automatización con IA. ROAS objetivo: +10x.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="tu@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>WhatsApp</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu número" {...field} />
                      </FormControl>
                      <FormDescription>Solo para coordinar la sesión.</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="website"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sitio web (opcional)</FormLabel>
                      <FormControl>
                        <Input placeholder="https://" {...field} />
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
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Cuéntanos sobre tu negocio y objetivos" rows={5} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button type="submit" className="w-full sm:w-auto">Solicitar plan de crecimiento</Button>
                  <Button asChild variant="secondary" className="w-full sm:w-auto">
                    <a href={`https://wa.me/?text=${waText}`} target="_blank" rel="noopener noreferrer">Hablar por WhatsApp</a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">Al enviar aceptas ser contactado para coordinar la llamada. No compartimos tus datos.</p>
              </form>
            </Form>
          </div>

        <aside className="rounded-xl border border-border/60 bg-card p-6">
          <h3 className="text-lg font-semibold">¿Qué incluye la sesión?</h3>
          <ul className="mt-3 space-y-2 text-sm text-foreground/90">
            <li>• Auditoría express del embudo y canales</li>
            <li>• Quick wins aplicables en 7-14 días</li>
            <li>• Plan de 90 días enfocado en desbloquear ventas</li>
          </ul>
        </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
