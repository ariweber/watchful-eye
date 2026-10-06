import "./LoginPage.css";
import { useState } from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "../../store/auth.store";
import type { LoginUser } from "../../types/users.type";
import FormLogin from "../../components/FormLogin/FormLogin";
import type { Field } from "../../components/FormLogin/FormLogin";

const emptyUser: LoginUser = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const { login, error, token } = useAuthStore();
  const [user, setUser] = useState<LoginUser>(emptyUser);

  const handleChange = (e: React.ChangeEvent<Field>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(user);
  };

  if (token) return <Navigate to="/alerts" replace />;

  return (
    <div className="page">
      <h1>התחברות</h1>

      {error && <p className="error">{error}</p>}

      <FormLogin
        login={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
