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

const onUserChanged = () => {
    
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