import { create } from "zustand";
import type { LoginUser, NewUser, User } from "../types/users.type";
import { getMe, login, register } from "../api/users.api";
import { getError } from "../utils/getError";

type AuthStore = {
    user: User | null;
    token: string;
    loading: boolean;
    error: string;
    login: (loginUser: LoginUser) => Promise<void>;
    register: (newUser: NewUser) => Promise<void>;
    getMe: () => Promise<void>;
    logout: () => void;
};

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    token: localStorage.getItem("token") || "",
    loading: false,
    error: "",
    login: async (loginUser) => {
        set({ loading: true, error: "" });
        try {
            const { token, user } = await login(loginUser);
            localStorage.setItem("token", token);
            set({ token, user, loading: false });
        } catch (error) {
            set({ error: getError(error), loading: false });
        }
    },
    register: async (newUser) => {
        set({ loading: true, error: "" });
        try {
            await register(newUser);
            set({ loading: false });
        } catch (error) {
            set({ error: getError(error), loading: false });
        }
    },
    getMe: async () => {
        set({ loading: true, error: "" });
        try {
            const user = await getMe();
            set({ user, loading: false });
        } catch (error) {
            localStorage.removeItem("token");
            set({ token: "", user: null, error: getError(error), loading: false });
        }
    },
    logout: () => {
        localStorage.removeItem("token");
        set({ token: "", user: null, error: "" });
    },
}));
