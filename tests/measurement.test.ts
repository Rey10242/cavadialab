import { expect, test } from "bun:test";
import { trackContactWhatsApp, trackFormSubmit, trackWhatsAppClick } from "../src/lib/gtag";

test("WhatsApp is engagement, not a confirmed lead", () => {
  const calls: unknown[][] = [];
  const previous = globalThis.window;
  Object.assign(globalThis, { window: { gtag: (...args: unknown[]) => calls.push(args) } });
  try {
    trackWhatsAppClick("home_hero");
    trackContactWhatsApp();
    expect(calls).toEqual([
      ["event", "whatsapp_click", { event_category: "engagement", event_label: "home_hero" }],
      ["event", "whatsapp_click", { event_category: "engagement", event_label: "home_contact" }],
    ]);
  } finally { Object.assign(globalThis, { window: previous }); }
});

test("saved contact emits only its outcome, without personal fields", () => {
  const calls: unknown[][] = [];
  const previous = globalThis.window;
  Object.assign(globalThis, { window: { gtag: (...args: unknown[]) => calls.push(args) } });
  try {
    trackFormSubmit();
    expect(calls).toEqual([["event", "contact_submission_saved", { event_category: "lead_generation", event_label: "contact_form", value: 1 }]]);
  } finally { Object.assign(globalThis, { window: previous }); }
});