import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DashboardProvider } from "./context/context";
import { AuthProvider } from "./context/AuthContext";
import { CompanyProvider } from "./context/companyContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CompanyProvider >
    <AuthProvider>
      <DashboardProvider>
        <App />
      </DashboardProvider>
    </AuthProvider>
    </CompanyProvider>
  </React.StrictMode>
);
