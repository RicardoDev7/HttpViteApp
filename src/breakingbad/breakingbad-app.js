/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingBadApp = (element) => {
    const appTitle = document.getElementById('h1AppTitle');
    appTitle.innerHTML = 'BreakingBad App';
    element.innerHTML = 'Loading...';
}