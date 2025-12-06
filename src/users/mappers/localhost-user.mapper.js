import { User } from "../models/user"
import { UserData } from "../models/userData";

/**
 * 
 * @param {Like<User>} localHostUser 
 * @returns {User}
 */
export const localHostUserToModel = (localHostUser) => {
    const {
        id,
        isActive,
        balance,
        avatar,
        first_name,
        last_name,
        gender
    } = localHostUser;
    return new User({
        id, 
        isActive,
        balance, 
        avatar, 
        firstName: first_name, 
        lastName: last_name, 
        gender
    });
}

export const localHostUserDataToModel = (localHostUserData) => {
    const {
        data,
        first,
        items,
        last,
        next,
        pages,
        prev
    } = localHostUserData;
    return new UserData({
        data,
        first,
        items,
        last,
        next,
        pages,
        prev
    });
}