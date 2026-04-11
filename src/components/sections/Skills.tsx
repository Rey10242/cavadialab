import React from "react";
import { motion } from "framer-motion";
import { Globe, Megaphone, BarChart3, Cog } from "lucide-react";

// ── Inline SVG logos ──

const WordPressLogo = () => (
  <svg viewBox="0 0 122.52 122.523" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <g fill="#fff">
      <path d="M8.708 61.26c0 20.802 12.089 38.779 29.619 47.298L13.258 39.872a52.354 52.354 0 0 0-4.55 21.388z"/>
      <path d="M96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.808-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501L48.2 93.547l11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z"/>
      <path d="M62.184 65.857l-15.768 45.819a52.553 52.553 0 0 0 32.525-.844 4.678 4.678 0 0 1-.374-.724z"/>
      <path d="M107.376 36.046a41.72 41.72 0 0 1 .38 5.573c0 5.497-1.028 11.662-4.129 19.324l-16.585 47.955c16.135-9.405 27.012-26.882 27.012-46.963a52.28 52.28 0 0 0-6.678-25.889z"/>
      <path d="M61.262 0C27.483 0 0 27.481 0 61.26c0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263C122.527 27.481 95.04 0 61.262 0zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z"/>
    </g>
  </svg>
);

const ShopifyLogo = () => (
  <svg viewBox="0 0 109.5 124.5" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M74.7 14.8s-.3-1.7-1.5-2.8c-1.1-1-2.7-.8-3.4-.7-.4 0-6.4 1.2-6.4 1.2-.9-2.7-2.4-5.1-4.4-7.1C56.2 2.6 52.5.8 48.8.8h-.6C47.7.3 47 0 46.2 0c-6.9 0-10.3 8.7-11.3 13.1l-9.7 3c-3 .9-3.1 1-3.5 3.9L15 98.6l52.9 10 28.4-6.1L74.7 14.8zM55.6 9.5c-1.3 1.4-2.8 3.7-3.3 7.5l-11.1 3.4c1.1-4.2 3.7-12.7 9.7-12.7.4 0 .8.1 1.1.2 1.1.5 2.3 1 3.6 1.6z" fill="#95BF47"/>
    <path d="M69.8 12c-.4 0-8.8 1.7-8.8 1.7-.9-2.7-2.4-5.1-4.4-7.1C54.4 4.4 51.1 2.7 47.7 2.5v100.4L80 96.3l-10.2-84.3z" fill="#5E8E3E"/>
    <path d="M48.8 26.1l-4 12.3s-3.5-1.9-7.7-1.9c-6.2 0-6.5 3.9-6.5 4.9 0 5.4 14 7.4 14 20.1 0 9.9-6.3 16.3-14.8 16.3-10.2 0-15.4-6.4-15.4-6.4l2.7-9s5.4 4.6 9.9 4.6c3 0 4.2-2.3 4.2-4 0-7-11.5-7.3-11.5-19 0-9.8 7-19.3 21.1-19.3 5.5 0 8 1.4 8 1.4z" fill="#fff"/>
  </svg>
);

const VtexLogo = () => (
  <svg viewBox="0 0 200 51" xmlns="http://www.w3.org/2000/svg" className="w-14 h-6">
    <path d="M45.8 0L30.5 38.6 15.3 0H0l22.9 51h15.3L61 0H45.8zM68.4 0v51h14.5V14.3h18.8V0H68.4zM152.9 0l-9.7 14.3-9.7-14.3h-17.2l18.8 25.5L115.3 51h17.2l9.7-14.3 9.7 14.3h17.2l-19.8-25.5L169 0h-16.1zM194.7 0h-34.4v14.3h19.9v22.4h-19.9V51h34.4c3 0 5.3-2.4 5.3-5.3V5.3c0-3-2.3-5.3-5.3-5.3z" fill="#F71963"/>
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" className="w-12 h-8">
    <path d="M30 68 C30 68 30 40 50 40 C62 40 70 52 80 60 C90 68 98 72 106 60 C114 48 114 32 130 32 C150 32 160 52 160 68" stroke="white" strokeWidth="10" fill="none" strokeLinecap="round"/>
    <path d="M160 68 C160 52 170 32 190 32 C206 32 206 48 214 60 C222 72 230 68 240 60 C250 52 258 40 270 40 C290 40 290 68 290 68" stroke="white" strokeWidth="10" fill="none" strokeLinecap="round"/>
    <text x="30" y="96" fontFamily="Helvetica Neue, Arial" fontSize="28" fontWeight="700" fill="white" letterSpacing="2">Meta</text>
  </svg>
);

const GoogleAdsLogo = () => (
  <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <rect width="192" height="192" rx="30" fill="#fff"/>
    <rect x="20" y="112" width="40" height="60" rx="8" fill="#FBBC04"/>
    <rect x="76" y="72" width="40" height="100" rx="8" fill="#4285F4"/>
    <rect x="132" y="32" width="40" height="140" rx="8" fill="#34A853"/>
  </svg>
);

const TikTokLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <path d="M33 6c0 5 4 9 9 9v7c-3.3 0-6.4-1-9-2.8V34a12 12 0 1 1-12-12c.7 0 1.3.1 2 .2v7.3a5 5 0 1 0 3 4.5V6h7z" fill="#fff"/>
  </svg>
);

const LinkedInLogo = () => (
  <svg viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <path d="M34 2.5v29A2.5 2.5 0 0 1 31.5 34h-29A2.5 2.5 0 0 1 0 31.5v-29A2.5 2.5 0 0 1 2.5 0h29A2.5 2.5 0 0 1 34 2.5z" fill="#fff"/>
    <path d="M5 12.5h5V29H5zM7.5 10a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM26 29h-5v-8.5c0-2-.8-3.3-2.5-3.3-1.4 0-2.2.9-2.5 1.8-.1.3-.1.8-.1 1.3V29H11V12.5h4.9v2.1c.7-1 1.9-2.4 4.5-2.4 3.3 0 5.7 2.2 5.7 6.8V29z" fill="#0A66C2"/>
  </svg>
);

const GA4Logo = () => (
  <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <rect width="192" height="192" rx="16" fill="#fff"/>
    <rect x="16" y="100" width="44" height="76" rx="22" fill="#E8710A"/>
    <rect x="74" y="56" width="44" height="120" rx="22" fill="#E8710A"/>
    <rect x="132" y="16" width="44" height="160" rx="22" fill="#F9AB00"/>
    <circle cx="38" cy="154" r="22" fill="#E8710A"/>
  </svg>
);

const GTMLogo = () => (
  <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <rect width="192" height="192" rx="16" fill="#fff"/>
    <rect x="16" y="16" width="160" height="160" rx="24" fill="#4285F4"/>
    <path d="M96 40 L152 96 L96 152 L96 112 L52 112 L52 80 L96 80 Z" fill="#fff"/>
  </svg>
);

const LookerLogo = () => (
  <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <rect width="192" height="192" rx="16" fill="#fff"/>
    <rect x="24" y="120" width="32" height="52" rx="6" fill="#4285F4"/>
    <rect x="68" y="84" width="32" height="88" rx="6" fill="#EA4335"/>
    <rect x="112" y="52" width="32" height="120" rx="6" fill="#34A853"/>
    <rect x="156" y="96" width="12" height="76" rx="4" fill="#FBBC04"/>
    <circle cx="40" cy="110" r="8" fill="#4285F4"/>
    <circle cx="84" cy="74" r="8" fill="#EA4335"/>
    <circle cx="128" cy="42" r="8" fill="#34A853"/>
    <path d="M40 110 L84 74 L128 42" stroke="#9AA0A6" strokeWidth="4" fill="none"/>
  </svg>
);

const HotjarLogo = () => (
  <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M150 0C67.2 0 0 67.2 0 150s67.2 150 150 150 150-67.2 150-150S232.8 0 150 0z" fill="#FF3C00"/>
    <path d="M183.1 68.8c-6.4 1.3-16.4 13.2-16.4 13.2-11.6-29.4-58.9-24.2-68.5 3.5-6 17.6 3.2 38.3 15.5 53.2 12.2 14.8 24.1 27.4 27.1 46.8 2.3 14.6-.7 28.4-3.9 36.4 6.2-1 23.2-18.6 24.6-36.4 1.4-17.9-10.3-34-20.2-49.7-8.9-14.2-15.7-28-12.5-40.9 3.5-14 18.1-19.8 28.2-14.6 10.2 5.2 12.3 18.4 10.5 26.1 0 0 12.8-12.1 16.9-22.6 4.4-11.1 4.9-17.8-.8-16z" fill="#fff"/>
  </svg>
);

const ClarityLogo = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <rect width="100" height="100" rx="8" fill="#fff"/>
    <path d="M50 10C28 10 10 28 10 50s18 40 40 40 40-18 40-40S72 10 50 10z" fill="none" stroke="#0078D4" strokeWidth="6"/>
    <path d="M35 50c0-8.3 6.7-15 15-15 5.2 0 9.7 2.6 12.4 6.5" stroke="#0078D4" strokeWidth="6" fill="none" strokeLinecap="round"/>
    <circle cx="50" cy="50" r="6" fill="#0078D4"/>
  </svg>
);

const MakeLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <rect width="200" height="200" rx="40" fill="#6D00CC"/>
    <circle cx="50" cy="100" r="20" fill="none" stroke="#fff" strokeWidth="8"/>
    <circle cx="100" cy="100" r="20" fill="none" stroke="#fff" strokeWidth="8"/>
    <circle cx="150" cy="100" r="20" fill="none" stroke="#fff" strokeWidth="8"/>
    <line x1="70" y1="100" x2="80" y2="100" stroke="#fff" strokeWidth="8"/>
    <line x1="120" y1="100" x2="130" y2="100" stroke="#fff" strokeWidth="8"/>
  </svg>
);

const N8nLogo = () => (
  <svg viewBox="0 0 296 80" xmlns="http://www.w3.org/2000/svg" className="w-14 h-7">
    <path fillRule="evenodd" clipRule="evenodd" d="M136 32C128.545 32 122.28 26.9009 120.504 20H102.166C98.2548 20 94.9173 22.8273 94.2744 26.6848L93.6168 30.6304C92.9924 34.3765 91.0974 37.6369 88.4175 40C91.0974 42.3631 92.9924 45.6235 93.6168 49.3696L94.2744 53.3152C94.9173 57.1727 98.2548 60 102.166 60H104.504C106.28 53.0991 112.545 48 120 48C128.837 48 136 55.1634 136 64C136 72.8366 128.837 80 120 80C112.545 80 106.28 74.9009 104.504 68H102.166C94.3441 68 87.6691 62.3454 86.3832 54.6304L85.7256 50.6848C85.0827 46.8273 81.7452 44 77.8345 44H71.4959C69.7198 50.9009 63.4554 56 56 56C48.5446 56 42.2802 50.9009 40.5041 44H31.4959C29.7198 50.9009 23.4554 56 16 56C7.16344 56 0 48.8366 0 40C0 31.1634 7.16344 24 16 24C23.4554 24 29.7198 29.0991 31.4959 36H40.5041C42.2802 29.0991 48.5446 24 56 24C63.4554 24 69.7198 29.0991 71.4959 36H77.8345C81.7452 36 85.0827 33.1727 85.7256 29.3152L86.3832 25.3696C87.6691 17.6546 94.3441 12 102.166 12L120.504 12C122.28 5.09909 128.545 0 136 0C144.837 0 152 7.16344 152 16C152 24.8366 144.837 32 136 32ZM16 48C20.4183 48 24 44.4183 24 40C24 35.5817 20.4183 32 16 32C11.5817 32 8 35.5817 8 40C8 44.4183 11.5817 48 16 48ZM64 40C64 44.4183 60.4183 48 56 48C51.5817 48 48 44.4183 48 40C48 35.5817 51.5817 32 56 32C60.4183 32 64 35.5817 64 40ZM128 64C128 68.4183 124.418 72 120 72C115.582 72 112 68.4183 112 64C112 59.5817 115.582 56 120 56C124.418 56 128 59.5817 128 64ZM144 16C144 20.4183 140.418 24 136 24C131.582 24 128 20.4183 128 16C128 11.5817 131.582 8 136 8C140.418 8 144 11.5817 144 16Z" fill="#EA4B71"/>
    <path d="M192.96 56H184.84V24.23H192.26L192.96 27.98H193.47C195.37 25.5 198.04 23.6 202.79 23.6C210.34 23.6 215.16 28.43 215.16 36.75V56H207.04V38.4C207.04 33.19 204.06 30.65 200.26 30.65C196.39 30.65 192.96 33.13 192.96 38.79V56Z" fill="#040506"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M248.01 34.59V34.21C250.8 32.81 253.59 30.4 253.59 25.63C253.59 18.77 247.95 14.64 240.15 14.64C232.15 14.64 226.44 19.02 226.44 25.76C226.44 30.33 229.11 32.81 232.03 34.21V34.59C228.79 35.74 224.92 39.17 224.92 44.89C224.92 51.81 230.63 56.64 240.08 56.64C249.53 56.64 255.05 51.81 255.05 44.89C255.05 39.17 251.25 35.8 248.01 34.59ZM240.08 20.49C243.25 20.49 245.6 22.52 245.6 25.95C245.6 29.38 243.19 31.41 240.08 31.41C236.97 31.41 234.37 29.38 234.37 25.95C234.37 22.46 236.85 20.49 240.08 20.49ZM240.08 50.54C236.4 50.54 233.42 48.19 233.42 44.19C233.42 40.56 235.9 37.83 240.02 37.83C244.08 37.83 246.55 40.5 246.55 44.31C246.55 48.19 243.7 50.54 240.08 50.54Z" fill="#040506"/>
    <path d="M264.84 56H272.96V38.79C272.96 33.13 276.39 30.65 280.26 30.65C284.06 30.65 287.04 33.19 287.04 38.4V56H295.16V36.75C295.16 28.43 290.34 23.6 282.79 23.6C278.04 23.6 275.37 25.5 273.47 27.98H272.96L272.26 24.23H264.84V56Z" fill="#040506"/>
  </svg>
);

const WhatsAppLogo = () => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <path d="M24 4C12.95 4 4 12.95 4 24c0 3.74 1.01 7.25 2.76 10.27L4 44l9.98-2.72A19.9 19.9 0 0 0 24 44c11.05 0 20-8.95 20-20S35.05 4 24 4z" fill="#25D366"/>
    <path d="M34.4 29.6c-.5-1.3-3.3-2.5-3.5-2.6-.2 0-.4-.2-.7 0-.4.4-1.4 1.8-1.8 2-.4.2-.7.2-1.1 0-1.3-.5-2.5-1.2-3.5-2.1-1-1-1.8-2.1-2.3-3.4-.2-.4-.2-.7.1-1.1.3-.3.6-.7.9-1.1.3-.4.5-.7.4-1.1-.1-.4-1.3-3.1-1.7-4.2-.5-1.1-.9-1-1.3-1h-.5c-.6 0-1.2.3-1.7.8-.5.5-1.9 1.9-1.9 4.6s2 4.7 2.2 5c.3.3 3.8 6 9.3 8.4 5.5 2.4 5.5 1.6 6.5 1.5s3.3-1.3 3.8-2.6c.4-1.2.4-2.3.3-2.6z" fill="#fff"/>
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <circle cx="100" cy="100" r="100" fill="#FF7A59"/>
    <path d="M115 75V55a15 15 0 1 0-30 0v20a40 40 0 1 0 30 0z" fill="#fff"/>
    <circle cx="100" cy="115" r="25" fill="#FF7A59"/>
    <path d="M88 105l8 8 16-16" stroke="#fff" strokeWidth="5" fill="none" strokeLinecap="round"/>
  </svg>
);

const GoHighLevelLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <rect width="200" height="200" rx="40" fill="#fff"/>
    <text x="20" y="130" fontFamily="Arial Black" fontSize="60" fontWeight="900" fill="#1A1A2E">GHL</text>
    <rect x="20" y="145" width="160" height="8" rx="4" fill="#00C4CC"/>
  </svg>
);

const SendPulseLogo = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-9 h-9">
    <rect width="200" height="200" rx="40" fill="#2C82C9"/>
    <path d="M40 100l120-60-60 120-20-60z" fill="#fff"/>
  </svg>
);

const WooCommerceLogo = () => (
  <svg viewBox="0 0 350 212" xmlns="http://www.w3.org/2000/svg" className="w-10 h-7">
    <path d="M31.1 0h287.8C333.7 0 350 16.3 350 36.5v107.3c0 20.2-16.3 36.5-36.5 36.5H198.3l15.4 31.7-67.8-31.7H31.1C13.9 180.3 0 166.4 0 149.2V36.5C0 16.3 13.9 0 31.1 0z" fill="#9b5c8f"/>
    <text x="50" y="120" fontFamily="Arial" fontSize="72" fontWeight="bold" fill="#fff">Woo</text>
  </svg>
);

const categories = [
  {
    title: "Presencia Digital",
    icon: Globe,
    tools: [
      { name: "WordPress", logo: <div className="w-10 h-10 flex items-center justify-center" style={{ background: "#21759B" }}><WordPressLogo /></div> },
      { name: "WooCommerce", logo: <div className="w-10 h-10 flex items-center justify-center px-1" style={{ background: "#7F54B3" }}><WooCommerceLogo /></div> },
      { name: "Shopify", logo: <div className="w-10 h-10 flex items-center justify-center" style={{ background: "#95BF47" }}><ShopifyLogo /></div> },
      { name: "VTEX", logo: <div className="w-10 h-10 bg-white flex items-center justify-center px-1"><VtexLogo /></div> },
    ],
  },
  {
    title: "Paid Media",
    icon: Megaphone,
    tools: [
      { name: "Meta Ads", logo: <div className="w-10 h-10 flex items-center justify-center px-1" style={{ background: "#0866FF" }}><MetaLogo /></div> },
      { name: "Google Ads", logo: <div className="w-10 h-10 flex items-center justify-center bg-white"><GoogleAdsLogo /></div> },
      { name: "TikTok Ads", logo: <div className="w-10 h-10 flex items-center justify-center" style={{ background: "#010101" }}><TikTokLogo /></div> },
      { name: "LinkedIn Ads", logo: <div className="w-10 h-10 flex items-center justify-center" style={{ background: "#0A66C2" }}><LinkedInLogo /></div> },
    ],
  },
  {
    title: "Medición",
    icon: BarChart3,
    tools: [
      { name: "GA4", logo: <div className="w-10 h-10 flex items-center justify-center bg-white"><GA4Logo /></div> },
      { name: "GTM", logo: <div className="w-10 h-10 flex items-center justify-center bg-white"><GTMLogo /></div> },
      { name: "Looker Studio", logo: <div className="w-10 h-10 flex items-center justify-center bg-white"><LookerLogo /></div> },
      { name: "Hotjar", logo: <div className="w-10 h-10 flex items-center justify-center" style={{ background: "#FF3C00" }}><HotjarLogo /></div> },
      { name: "Clarity", logo: <div className="w-10 h-10 flex items-center justify-center bg-white"><ClarityLogo /></div> },
    ],
  },
  {
    title: "Automatización",
    icon: Cog,
    tools: [
      { name: "Make", logo: <div className="w-10 h-10 flex items-center justify-center px-1" style={{ background: "#6D00CC" }}><MakeLogo /></div> },
      { name: "n8n", logo: <div className="w-10 h-10 bg-white flex items-center justify-center px-1"><N8nLogo /></div> },
      { name: "WhatsApp API", logo: <div className="w-10 h-10 flex items-center justify-center" style={{ background: "#25D366" }}><WhatsAppLogo /></div> },
      { name: "GoHighLevel", logo: <div className="w-10 h-10 flex items-center justify-center bg-white"><GoHighLevelLogo /></div> },
      { name: "SendPulse", logo: <div className="w-10 h-10 flex items-center justify-center" style={{ background: "#2C82C9" }}><SendPulseLogo /></div> },
      { name: "HubSpot", logo: <div className="w-10 h-10 flex items-center justify-center" style={{ background: "#FF7A59" }}><HubSpotLogo /></div> },
    ],
  },
];

const Skills: React.FC = () => (
  <section id="stack" className="section-padding relative overflow-hidden">
    <div className="container mx-auto px-4 md:px-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="section-label">Stack</div>
        <h2 className="section-title">Herramientas</h2>
        <p className="text-sm text-muted-foreground max-w-md">
          +20 herramientas conectadas en un ecosistema full-funnel.
        </p>
      </motion.div>

      {/* Brutalist grid */}
      <div className="grid-cards grid grid-cols-1 sm:grid-cols-2">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="p-5 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <category.icon className="w-4 h-4 text-primary" />
              <h3 className="font-heading text-xl tracking-wide text-foreground">
                {category.title}
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {category.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="group relative"
                >
                  <div className="border border-border hover:border-primary/40 transition-colors">
                    {tool.logo}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[0.6rem] font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                    {tool.name}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
