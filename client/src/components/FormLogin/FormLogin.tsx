import type { LoginUser } from "../../types/users.type";

export type Field = HTMLInputElement | HTMLSelectElement;

type FormLoginProps = {
  login: LoginUser;
  onChange: (event: React.ChangeEvent<Field>) => void;
  onSubmit: (event: React.FormEvent) => void;
};

export default function FormLogin(
  { login, onChange, onSubmit }: FormLoginProps,
) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <label className="field">
        אמייל
        <input
          type="email"
          name="email"
          value={login.email}
          onChange={onChange}
          required
        />
      </label>
      <label className="field">
        סיסמה
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={onChange}
          minLength={8}
          required
        />
      </label>

      <button type="submit">כניסה</button>
    </form>
  );
}
