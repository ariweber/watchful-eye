import { email, z } from "zod";

export const usersSchema = z.object({
    username: z.string(),
    password: z.string().min(8),
    email: z.email(),
    role: z.enum(["arena_user", "general_user", "admin"]),
    assignedArena: z.enum(["North", "South", "Center", "All"]),
});

export const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8)
})
