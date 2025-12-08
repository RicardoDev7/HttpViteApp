import './render-modal.css';
import modalHTML from './render-modal.html?raw';

let modal, form;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) => {
    if(modal) return;
    modal = document.createElement('div');
    modal.id = 'modal-container';
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hide-modal';
    form = modal.querySelector('form');
    element.appendChild(modal);
    modal.addEventListener('click', (event) => {
        if(event.target.id !== 'modal-container') return;
        hideModal();
    });
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const userLike = {};
        for (const [key, value] of formData){
            if(key === 'balance'){
                userLike[key] = +value;
                continue;
            }
            if(key === 'isActive'){
                userLike[key] = value === 'on' ? true : false;
                continue;
            }
            userLike[key] = value;
        }
        console.log(userLike);
        hideModal();
    });
}

export const showModal = () => {
    modal.classList.remove('hide-modal');
}

export const hideModal = () => {
    modal.classList.add('hide-modal');
    form?.reset();
}