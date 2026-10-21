import { createRoot } from 'react-dom/client'
import { MotionConfig } from "framer-motion"
import { HelmetProvider } from 'react-helmet-async'
import '@fontsource/barlow/400.css'
import '@fontsource/barlow/500.css'
import '@fontsource/barlow/600.css'
import '@fontsource/barlow/700.css'
import App from './App.tsx'
import './index.css'

const root = document.getElementById("root");
if (root) createRoot(root).render(
  <HelmetProvider>
    <MotionConfig reducedMotion="user"><App /></MotionConfig>
  </HelmetProvider>
);
