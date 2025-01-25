import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./index.css";

const dom = document.getElementById("root") as HTMLElement;

createRoot(dom).render(
  <StrictMode>
    <App />
  </StrictMode>
);
