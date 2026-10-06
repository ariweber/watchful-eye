import { users } from "../models/users.models.js";

function toUser(user) {
    if (!user) return null;
    return {
        id: user._id.toString(),
        username: user.username,
        password: user.password,
        email: user.email,
        role: user.role,
        assignedArena: user.assignedArena,
    };
}

async function createUser(newUser) {
    const user = await users.create(newUser);
    return toUser(user);
}

async function getAllUsers() {
    const allUsers = await users.find();
    return allUsers.map(toUser);
}

async function getUserByEmail(email) {
    return toUser(await users.findOne({ email }));
}

async function getUserByID(id) {
    const user = await users.findById(id);
    return toUser(user);
}

async function updateUser(id, newUser) {
    const user = await users.findByIdAndUpdate(id, newUser, { new: true });
    return toUser(user);
}

async function deleteUser(id) {
    const user = await users.findByIdAndDelete(id);
    return toUser(user);
}

export const usersRepo = {
    createUser,
    getAllUsers,
    getUserByEmail,
    getUserByID,
    updateUser,
    deleteUser,
};

