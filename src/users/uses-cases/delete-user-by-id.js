/**
 * 
 * @param {String|Number} id 
 */
export const deleteUserByID = async (id) => {
    const url = `${import.meta.env.VITE_BASE_URL}users/${id}`;
    const res = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    await res.json();
    return true;
}