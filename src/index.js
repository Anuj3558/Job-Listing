import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DashboardProvider } from "./context/context";
import { AuthProvider } from "./context/AuthContext";
import { CompanyProvider } from "./context/companyContext";
import { JobProvider } from "./context/JobContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <AuthProvider>
    <CompanyProvider>
      <JobProvider>
        <DashboardProvider>
          <App />
        </DashboardProvider>
      </JobProvider>
    </CompanyProvider>
  </AuthProvider>
</React.StrictMode>
);
