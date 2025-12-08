import { renderAddButton } from "./presentation/render-add-button/render-add-button";
import { renderButtons } from "./presentation/render-buttons/render-buttons";
import { renderModal, showModal } from "./presentation/render-modal/render-modal";
import { renderTable } from "./presentation/render-table/render-table";
import usersStore from "./store/users.store";
import { saveUser } from "./uses-cases/save-user";

export const UsersApp = async(element) => {
    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();
    renderTable(element);
    renderButtons(element);
    renderAddButton(element, () => {showModal();});
    renderModal(element, async (userLike) => {
        const user = await saveUser(userLike);
        usersStore.onUserChanged(user);
        renderTable(element);
    });
}