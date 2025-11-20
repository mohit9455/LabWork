import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LmsProvider } from "./context/LmsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LmsProvider>
    <App />
  </LmsProvider>
);
