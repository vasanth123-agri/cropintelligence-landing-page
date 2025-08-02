import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CropIntelligence } from "./screens/CropIntelligence";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <CropIntelligence />
  </StrictMode>,
);
