import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "../index.css";
import App from "./App";
import { createDependencies } from "./compositionRoot";

const dependencies = createDependencies();

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <App {...dependencies} />
  </StrictMode>,
);
