import { User } from '../../models/user';
import { getUserByID } from '../../uses-cases/get-user-by-id';
import './render-modal.css';
import modalHTML from './render-modal.html?raw';

let modal, form;
let loadedUser;

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback}
 */
export const renderModal = (element, callback) => {
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
    form.addEventListener('submit', async (event) => {
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
        await callback(userLike);
        hideModal();
    });
}

export const showModal = async (id) => {
    modal.classList.remove('hide-modal');
    if(!id) return;
    const user = await getUserByID(id);
    console.log(user);
    setFormValues(user);
}

export const hideModal = () => {
    modal.classList.add('hide-modal');
    form?.reset();
}

/**
 * 
 * @param {User} user 
 */
const setFormValues = (user) => {
    form.querySelector('[name="firstName"]').value = user.firstName;
    form.querySelector('[name="lastName"]').value = user.lastName;
    form.querySelector('[name="balance"]').value = user.balance;
    form.querySelector('[name="isActive"]').checked = user.isActive;
    loadedUser = user;
}