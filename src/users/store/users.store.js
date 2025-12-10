import { localHostUserToModel } from "../mappers/localhost-user.mapper";
import { loadUsersByPage } from "../uses-cases/load-users-page"

const state = {
    currentPage: 0,
    lastPage: 1,
    users: [],
}

const loadNextPage = async () => {
    if(state.lastPage === state.currentPage) return;
    const users = await loadUsersByPage(state.currentPage + 1);
    if(!users) return;
    state.currentPage = (users.next) ? users.next - 1 : users.last;
    state.lastPage = users.last;
    state.users = users.data.map(localHostUserToModel);
}

const loadPreviousPage = async() => {
    if(state.currentPage === 1) return;
    const users = await loadUsersByPage(state.currentPage - 1);
    if(!users) return;
    state.currentPage -= 1;
    state.lastPage = users.last;
    state.users = users.data.map(localHostUserToModel);
}

/**
 * 
 * @param {User} user 
 * @returns 
 */
const onUserChanged = async (updatedUser) => {
    let wasFound = false;
    state.users = state.users.map(x => {
        if(x.id === updatedUser.id){
            wasFound = true;
            return updatedUser;
        }
        return x;
    });
    if(state.users.length < 10){
        state.users.push(updatedUser);
    }
}

const reloadPage = () => {

}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    getUsers: () => [...state.users],
    getCurrentPage: () => state.currentPage
}