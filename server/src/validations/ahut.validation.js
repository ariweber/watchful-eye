import {z} from "zod"

export const usersSchema = z.object({
    username: z.string(),
    password: z.string(),
    email: z.email(),
    role: z.enum(["arena_user", "general_user", "admin"]),
    assignedArena: z.enum(["North", "South", "Center", "All"]),
})
