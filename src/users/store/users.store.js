const state = {
    currentPage: 0,
    users: [],
}

const loadNextPage = () => {

}

const loadPreviousPage = () => {

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