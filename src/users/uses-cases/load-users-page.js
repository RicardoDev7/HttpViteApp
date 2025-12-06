import { localHostUserDataToModel } from "../mappers/localhost-user.mapper";
import { UserData } from "../models/userData";

/**
 * 
 * @param {Number} page 
 * @returns { Promise<UserData> }
 */
export const loadUsersByPage = async (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}users?_page=${page}`;
    const res = await fetch(url);
    const data = await res.json();
    return localHostUserDataToModel(data);
}