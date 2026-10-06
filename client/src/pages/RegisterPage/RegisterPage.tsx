import { useState } from "react";
import "./RegisterPage.css";
import type { NewUser } from "../../types/users.type";
import { useAuthStore } from "../../store/auth.store";
import FormNewUser from "../../components/FormNewUser/FormNewUser";
import type { Field } from "../../components/FormNewUser/FormNewUser";

const emptyUser: NewUser = {
  username: "",
  email: "",
  password: "",
  role: "admin",
  assignedArena: "North",
};

export default function RegisterPage() {
  const { register, error } = useAuthStore();
  const [user, setUser] = useState<NewUser>(emptyUser);


  const handleChange = (e: React.ChangeEvent<Field>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await register(user);
  };

  return (
    <div className="page">
      <h1>משתמש חדש</h1>

      {error && <p className="error">{error}</p>}

      <FormNewUser
        user={user}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
