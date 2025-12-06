import usersStore from '../../store/users.store';
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
}