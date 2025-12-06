import usersStore from '../../store/users.store';
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
                <a href="#/" data-id="${x.id}">Select</a>
                |
                <a href="#/" data-id="${x.id}">Delete</a>
            </td>
        </tr>
        `;
    });
    table.querySelector('tbody').innerHTML = tableHtml;
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