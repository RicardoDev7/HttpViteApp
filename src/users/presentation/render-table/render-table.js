import usersStore from '../../store/users.store';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';

let table;

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderTable = (element) => {
    const users = usersStore.getUsers();
    if(!table) {
        table = createTable();
        element.appendChild(table);
        table.addEventListener('click', (event) => tableSelecListener(event));
    }
    let tableHtml = '';
    users.forEach(x => {
        tableHtml += `
        <tr>
            <td>${x.id}</td>
            <td>${x.balance}</td>
            <td>${x.firstName}</td>
            <td>${x.lastName}</td>
            <td>${x.isActive}</td>
            <td>
                <a href="#/" class="select-user" data-id="${x.id}">Select</a>
                |
                <a href="#/" class="delete-user" data-id="${x.id}">Delete</a>
            </td>
        </tr>
        `;
    });
    table.querySelector('tbody').innerHTML = tableHtml;
}

const tableSelecListener = (event) => {
    const element = event.target.closest('.select-user');
    if(!element) return;
    const id = element.getAttribute('data-id');
    showModal(id);
}

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    const tableBody = document.createElement('tbody');
    tableHeaders.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Balance</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;
    table.appendChild(tableHeaders);
    table.appendChild(tableBody);
    return table;
}