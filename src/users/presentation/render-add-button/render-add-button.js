import './render-add-button.css';

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {Function} callback
 */
export const renderAddButton = (element, callback) => {
    const button = document.createElement('button');
    button.innerText = '+';
    button.classList.add('fatButton');
    element.appendChild(button);

    button.addEventListener('click', () => {
        if(!callback) return;
        callback();
    });
}