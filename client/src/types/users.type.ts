import type { Arena } from "./alerts.type";

export type Role = "arena_user" | "general_user" | "admin";

export type AssignedArena = Arena | "All";

export type NewUser = {
    username: string;
    password: string;
    email: string;
    role: Role;
    assignedArena: AssignedArena;
};

export type User = {
    id: string,
    username: string;
    email: string;
    role: Role;
    assignedArena: AssignedArena;
};

export type LoginUser = {
    email: string;
    password: string;
};

export type LoginResponse = {
    token: string;
    user: User;
};
