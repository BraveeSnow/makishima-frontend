import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Navbar } from "@/components/navbar";
import "./index.css";
import { ThemeProvider } from "@/lib/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Navbar />
    </ThemeProvider>
  </StrictMode>
);
