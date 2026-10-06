import { usersRepo } from "../repo/users.repo.js";
import { hashPassword } from "../utils/bcrypt.utils.js";
import { createError } from "../utils/cerateError.js";

async function register(newUser) {
    const exists = await usersRepo.getUserByEmail(newUser.email);
    if (exists) throw createError(409, "email already exists");

    const password = await hashPassword(newUser.password);
    const user = await usersRepo.createUser({ ...newUser, password });
    return {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role,
        assignedArena: user.assignedArena,
    };
}



export const authService = {
    register,
};
