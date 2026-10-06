import { usersRepo } from "../repo/users.repo.js";
import { hashPassword, comparePassword } from "../utils/bcrypt.utils.js";
import { signToken } from "../utils/jwt.utils.js";
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

async function login({ email, password }) {
    const user = await usersRepo.getUserByEmail(email);
    if (!user) throw createError(401, "invalid email or password");
    const isValid = await comparePassword(password, user.password);
    if (!isValid) throw createError(401, "invalid username or password");

    const token = signToken({
        id: user.id,
        role: user.role,
        assignedArena: user.assignedArena,
    });
    return {
        token,
        user: {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            assignedArena: user.assignedArena,
        },
    };
}

export const authService = {
    register,
    login,
};
