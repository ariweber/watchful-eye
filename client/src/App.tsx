import React from "react";
import { Route, Routes } from "react-router";
import AlertsPage from "./pages/AlertsPage/AlertsPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AlertsPage />} />
    </Routes>
  );
}
