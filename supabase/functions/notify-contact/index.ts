import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactNotificationRequest {
  name: string;
  email: string;
  phone?: string;
  location?: string;
  message: string;
  projectType?: string;
}

const getProjectTypeLabel = (type: string | undefined): string => {
  const types: Record<string, string> = {
    marketing: "Marketing Digital",
    automation: "Automatización",
    web: "Desarrollo Web",
    consulting: "Consultoría",
    other: "Otro",
  };
  return type ? types[type] || type : "No especificado";
};

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, location, message, projectType }: ContactNotificationRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message) {
      throw new Error("Missing required fields: name, email, or message");
    }

    const currentDate = new Date().toLocaleString("es-CO", {
      timeZone: "America/Bogota",
      dateStyle: "full",
      timeStyle: "short",
    });

    const emailResponse = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["rmontalvocavadia@gmail.com"],
      subject: `🚀 Nuevo Lead: ${name} - ${getProjectTypeLabel(projectType)}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #0a0a0b;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #8b5cf6; margin: 0; font-size: 28px;">🎯 Nuevo Lead Recibido</h1>
              <p style="color: #71717a; margin-top: 8px; font-size: 14px;">${currentDate}</p>
            </div>

            <!-- Main Card -->
            <div style="background: linear-gradient(135deg, #18181b 0%, #1f1f23 100%); border: 1px solid #27272a; border-radius: 16px; padding: 30px; margin-bottom: 20px;">
              
              <!-- Contact Info Header -->
              <div style="border-bottom: 1px solid #27272a; padding-bottom: 20px; margin-bottom: 20px;">
                <h2 style="color: #fafafa; margin: 0 0 4px 0; font-size: 22px;">${name}</h2>
                <a href="mailto:${email}" style="color: #8b5cf6; text-decoration: none; font-size: 16px;">${email}</a>
              </div>

              <!-- Contact Details Grid -->
              <div style="display: grid; gap: 16px; margin-bottom: 24px;">
                ${phone ? `
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="color: #71717a; min-width: 100px;">📱 Teléfono:</span>
                  <a href="tel:${phone}" style="color: #fafafa; text-decoration: none;">${phone}</a>
                </div>
                ` : ''}
                
                ${location ? `
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="color: #71717a; min-width: 100px;">📍 Ubicación:</span>
                  <span style="color: #fafafa;">${location}</span>
                </div>
                ` : ''}
                
                <div style="display: flex; align-items: center; gap: 12px;">
                  <span style="color: #71717a; min-width: 100px;">📋 Proyecto:</span>
                  <span style="display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 500;">
                    ${getProjectTypeLabel(projectType)}
                  </span>
                </div>
              </div>

              <!-- Message -->
              <div style="background: #09090b; border: 1px solid #27272a; border-radius: 12px; padding: 20px;">
                <h3 style="color: #a1a1aa; margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">💬 Mensaje</h3>
                <p style="color: #fafafa; margin: 0; line-height: 1.6; white-space: pre-wrap;">${message}</p>
              </div>
            </div>

            <!-- Action Buttons -->
            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${email}?subject=Re: Consulta desde el Portfolio" 
                 style="display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; font-size: 15px; margin-right: 12px;">
                ✉️ Responder
              </a>
              ${phone ? `
              <a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" 
                 style="display: inline-block; background: #22c55e; color: #fff; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; font-size: 15px;">
                💬 WhatsApp
              </a>
              ` : ''}
            </div>

            <!-- Footer -->
            <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #27272a;">
              <p style="color: #52525b; font-size: 12px; margin: 0;">
                Este email fue enviado automáticamente desde tu portfolio.<br>
                © ${new Date().getFullYear()} Reynaldo Montalvo - CavadiaLab
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Contact notification email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: unknown) {
    console.error("Error in notify-contact function:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
