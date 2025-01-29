import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import { Router } from "./router";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors/>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
