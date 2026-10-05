import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import AlertsPage from "./pages/AlertsPage/AlertsPage";
import AlertsNewPage from "./pages/AlertsNewPage/AlertsNewPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AlertsPage />} />
        <Route path="/new-alerts" element={<AlertsNewPage/>}/>
      </Route>
    </Routes>
  );
}
