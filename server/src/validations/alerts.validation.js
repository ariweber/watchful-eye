import { z } from "zod";

export const createSchema = z.object({
    displayName: z.string().optional(),
    description: z.string(),
    priority: z.enum(["Low", "Medium", "High", "Critical"]).optional(),
    arena: z.enum(["North", "South", "Center"]).optional(),
    status: z.enum(["Active", "Handled"]).optional(),
    lon: z.number().optional(),
    lat: z.number().optional(),
});
