import { create } from "zustand";
import type { User } from "../types/users.type";
import { deleteUser, getAllUsers } from "../api/users.api";
import { getError } from "../utils/getError";

type UsersStore = {
    users: User[];
    loading: boolean;
    error: string;
    getAllUsers: () => Promise<void>;
    removeUser: (id: string) => Promise<void>;
};

export const useUsersStore = create<UsersStore>((set) => ({
    users: [],
    loading: false,
    error: "",
    getAllUsers: async () => {
        set({ loading: true, error: "" });
        try {
            const users = await getAllUsers();
            set({ users, loading: false });
        } catch (error) {
            set({ error: getError(error), loading: false });
        }
    },
    removeUser: async (id) => {
        set({ error: "" });
        try {
            await deleteUser(id);
            set((state) => ({
                users: state.users.filter((item) => item.id !== id),
            }));
        } catch (error) {
            set({ error: getError(error) });
        }
    },
}));
