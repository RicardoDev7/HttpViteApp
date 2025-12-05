import { loadUsersByPage } from "../uses-cases/load-users-page"

const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = async () => {
    await loadUsersByPage(state.currentPage + 1);
}

const loadPreviousPage = async() => {
    const user = await loadUsersByPage(state.currentPage + 1);
    if(user.length === 0) return;
    state.currentPage += 1;
    state.users = user;
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
    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage
}