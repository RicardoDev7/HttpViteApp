import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} userLike 
 */
export const saveUser = async (userLike) => {
    const user = new User(userLike);
    if(!user.firstName || !user.lastName){
        throw new Error('First name and last name are required');
    }
    const userToSave = userModelToLocalhost(user);
    return user.id ? await updateUser(userToSave) : createUser(userToSave);
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