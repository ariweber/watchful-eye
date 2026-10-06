import "./UsersList.css";
import type { User } from "../../types/users.type";
import UserCard from "../UserCard/UserCard";

type UsersListProps = {
    users: User[];
    onDelete: (id: string) => void;
};

export default function UsersList({ users, onDelete }: UsersListProps) {
    return (
        <div className="users-list">
            {users.map((user) => (
                <UserCard key={user.id} user={user} onDelete={() => onDelete(user.id)} />
            ))}
        </div>
    );
}
