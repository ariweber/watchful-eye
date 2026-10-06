import { useEffect } from "react";
import { Link } from "react-router";
import { useUsersStore } from "../../store/users.store";
import UsersList from "../../components/UsersList/UsersList";

export default function UsersPage() {
    const { users, loading, error, getAllUsers, removeUser } = useUsersStore();

    useEffect(() => {
        getAllUsers();
    }, [getAllUsers]);

    return (
        <div className="page">
            <div className="top">
                <h1>משתמשים</h1>
                <Link className="add" to="/register">
                    משתמש חדש
                </Link>
            </div>

            {loading && <p className="msg">loading...</p>}
            {error && <p className="error">{error}</p>}

            {!loading && !error && <UsersList users={users} onDelete={removeUser} />}
        </div>
    );
}
