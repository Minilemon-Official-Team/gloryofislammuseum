import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import { TranslationProvider } from "./app/context/TranslationContext.tsx";
import { UILanguageProvider } from "./app/context/UILanguageContext.tsx";

createRoot(document.getElementById("root")!).render(
  <UILanguageProvider>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </UILanguageProvider>
);
