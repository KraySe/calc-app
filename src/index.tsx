import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// utilizar el componente
const container: HTMLElement = document.getElementById("root") as HTMLElement;
const root = createRoot(container as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
