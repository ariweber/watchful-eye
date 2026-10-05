import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import AlertsPage from "./pages/AlertsPage/AlertsPage";
import AlertsNewPage from "./pages/AlertsNewPage/AlertsNewPage";
import AlertPage from "./pages/AlertPage/AlertPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AlertsPage />} />
        <Route path="/new-alerts" element={<AlertsNewPage />} />
        <Route path="/alerts/:id" element={<AlertPage />} />
      </Route>
    </Routes>
  );
}
