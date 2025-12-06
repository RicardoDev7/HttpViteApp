import usersStore from '../../store/users.store';
import { renderTable } from '../render-table/render-table';
import './render-buttons.css';

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderButtons = (element) => {
    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >';
    const prevButton = document.createElement('button');
    prevButton.innerText = '< Previous';
    const currentPage = document.createElement('span');
    currentPage.id = "current-page";
    currentPage.innerText = usersStore.getCurrentPage();

    element.appendChild(prevButton);
    element.appendChild(currentPage);
    element.appendChild(nextButton);

    nextButton.addEventListener('click', async () => {
        await usersStore.loadNextPage();
        currentPage.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });
    prevButton.addEventListener('click', async () => {
        await usersStore.loadPreviousPage();
        currentPage.innerText = usersStore.getCurrentPage();
        renderTable(element);
    });
}