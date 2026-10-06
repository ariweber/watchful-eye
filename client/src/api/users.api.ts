import axios from "axios";
import type { LoginResponse, LoginUser, NewUser, User } from "../types/users.type";

const api = axios.create({ baseURL: "http://localhost:3000//api/auth" });

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export async function getAllUsers() {
    const respons = await api.get<User[]>("");
    return respons.data;
}

export async function register(newUser: NewUser) {
    const respons = await api.post<User>("/register", newUser);
    return respons.data;
}

export async function login(loginUser: LoginUser) {
    const respons = await api.post<LoginResponse>("/login", loginUser);
    return respons.data;
}

export async function getMe() {
    const respons = await api.get<User>("/me");
    return respons.data;
}

export async function deleteUser(id: string) {
    const respons = await api.delete<User>(`${id}`);
    return respons.data;
}
