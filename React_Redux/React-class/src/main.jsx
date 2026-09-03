import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import StoreProvider from "./context/StoreProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
