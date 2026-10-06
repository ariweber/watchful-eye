import type { User } from "../../types/users.type";

type UserCardProps = {
    user: User;
    onDelete: () => void;
};

export default function UserCard({ user, onDelete }: UserCardProps) {
    return (
        <div>
            <h2>{user.username}</h2>

            <div>
                <span>אימייל:</span>
                <span>{user.email}</span>
            </div>

            <div>
                <span>תפקיד:</span>
                <span>{user.role}</span>
            </div>

            <div>
                <span>איזור:</span>
                <span>{user.assignedArena}</span>
            </div>

            <div>
                <button type="button" onClick={onDelete}>
                    מחיקה
                </button>
            </div>
        </div>
    );
}
