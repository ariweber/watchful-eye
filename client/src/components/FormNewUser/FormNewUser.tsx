import "./FormNewUser.css";
import type { NewUser } from "../../types/users.type";

export type Field = HTMLInputElement | HTMLSelectElement;

type FormNewUserProps = {
    user: NewUser;
    onChange: (event: React.ChangeEvent<Field>) => void;
    onSubmit: (event: React.FormEvent) => void;
};

export default function FormNewUser(
    { user, onChange, onSubmit }: FormNewUserProps,
) {
    return (
        <form className="form" onSubmit={onSubmit}>
            <label className="field">
                שם משתמש
                <input
                    name="username"
                    value={user.username}
                    onChange={onChange}
                    required
                />
            </label>

            <label className="field">
                אימייל
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={onChange}
                    required
                />
            </label>

            <label className="field">
                סיסמה
                <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={onChange}
                    minLength={8}
                    required
                />
            </label>

            <label className="field">
                תפקיד
                <select name="role" value={user.role} onChange={onChange}>
                    <option value="arena_user">arena_user</option>
                    <option value="general_user">general_user</option>
                    <option value="admin">admin</option>
                </select>
            </label>

            <label className="field">
                איזור
                <select
                    name="assignedArena"
                    value={user.assignedArena}
                    onChange={onChange}
                >
                    <option value="North">North</option>
                    <option value="Center">Center</option>
                    <option value="South">South</option>
                    <option value="All">All</option>
                </select>
            </label>

            <button type="submit">הוספה</button>
        </form>
    );
}
