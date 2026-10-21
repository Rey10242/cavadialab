import { describe, expect, test } from "bun:test";
import { consultingPacks, homeFaqs, solutions, SITE_URL, whatsappUrl } from "../src/content/site";
import { landings } from "../src/content/landings";
import { readFileSync } from "node:fs";

describe("Owner-approved business rules", () => {
  test("homepage contains at most four distinct relevant FAQs", () => {
    expect(homeFaqs.length).toBeGreaterThan(0);
    expect(homeFaqs.length).toBeLessThanOrEqual(4);
    expect(new Set(homeFaqs).size).toBe(homeFaqs.length);
  });
  test("session remains COP 130000", () => {
    expect(consultingPacks.find(p => p.name === "Sesión Puntual")?.price).toBe(130000);
  });
  test("strategic pack remains COP 440000", () => {
    expect(consultingPacks.find(p => p.name === "Pack Estratégico")?.price).toBe(440000);
  });
  test("all existing public routes are preserved", () => {
    expect(landings.map(l => l.slug).sort()).toEqual([
      "/consultor-marketing-digital-cartagena", "/paid-media-manager", "/campanas-google-ads", "/campanas-meta-ads", "/analitica-y-tracking", "/desarrollo-web-y-apps", "/consultor-marketing-digital-espana", "/consultor-marketing-digital-mexico", "/paid-media-consultant-usa",
    ].sort());
  });
  test("four approved solutions point to existing public pages", () => {
    expect(solutions.map(s => s.name)).toEqual(["Meta Ads", "Google Ads", "Tracking & Analytics", "Desarrollo Web & Apps"]);
    for (const solution of solutions) expect(landings.some(l => l.slug === solution.path)).toBe(true);
  });
  test("primary domain and WhatsApp channel remain unchanged", () => {
    expect(SITE_URL).toBe("https://cavadialab.com");
    const url = new URL(whatsappUrl("un proyecto"));
    expect(url.origin + url.pathname).toBe("https://wa.me/573246875354");
    expect(url.searchParams.get("text")).toContain("un proyecto");
  });
  test("sitemap includes only current public routes", () => {
    const xml = readFileSync("public/sitemap.xml", "utf8");
    const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
    expect(urls.sort()).toEqual([SITE_URL + "/", ...landings.map(l => SITE_URL + l.slug)].sort());
  });
});