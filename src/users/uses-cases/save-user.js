import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);
    return user.id ? await updateUser(user) : createUser(user);
}

/**
 * 
 * @param {Like<User>} user 
 */
const createUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}users`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return await res.json();
}

/**
 * 
 * @param {Like<User>} user 
 */
const updateUser = async (user) => {
    const url = `${import.meta.env.VITE_BASE_URL}users`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });
    return await res.json();
}