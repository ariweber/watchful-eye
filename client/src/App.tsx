import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import LoginPage from "./pages/LoginPage/LoginPage";
import AlertsPage from "./pages/AlertsPage/AlertsPage";
import AlertsNewPage from "./pages/AlertsNewPage/AlertsNewPage";
import AlertPage from "./pages/AlertPage/AlertPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UsersPage from "./pages/UsersPage/UsersPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/new-alerts" element={<AlertsNewPage />} />
          <Route path="/alerts/:id" element={<AlertPage />} />
          <Route element={<AdminRoute />}>
            <Route path="/users" element={<UsersPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
