import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../store/auth.store";

export default function AdminRoute() {
  const { user, token, loading, getMe } = useAuthStore();

  useEffect(() => {
    if (token && !user) getMe();
  }, [token, user, getMe]);
  if (loading || !user) return <p className="msg">loading...</p>;
  if (user.role !== "admin") return <Navigate to="/alerts" replace />;
  return <Outlet />;
}
