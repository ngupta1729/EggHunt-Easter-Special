import { createRoot } from 'react-dom/client'
import posthog from 'posthog-js'
import App from './App.tsx'
import './index.css'

posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  capture_pageview: true,
  session_recording: { enabled: true },
})

createRoot(document.getElementById("root")!).render(<App />);
