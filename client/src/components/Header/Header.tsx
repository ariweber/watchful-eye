import { Link, useNavigate } from "react-router";
import "./Header.css";
import { useAuthStore } from "../../store/auth.store";

export default function Header() {
  const { user, token, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="header">
      <h1>עין צופיה</h1>

      {token && (
        <nav className="nav">
          {user?.role === "admin" && (
            <Link className="link" to="/users">
              משתמשים
            </Link>
          )}
          <button className="logout" onClick={handleLogout}>
            התנתקות
          </button>
        </nav>
      )}
    </header>
  );
}
