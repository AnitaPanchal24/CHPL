const input = document.querySelector('.item');
const lists = document.querySelectorAll('ul');
const searchInput = document.querySelector('.searchInput');
const clearAllButton = document.getElementById('clearAll');

// Add items to the appropriate list
const handleAdd = (event) => {
    event.preventDefault();

    const isNeedList = event.target.id === 'addNeed';
    const listItem = document.createElement('li');

    listItem.innerHTML = `
        <input type="checkbox" ${isNeedList ? '' : 'checked'}>
        <span>${input.value.trim()}</span>
        <button class="edit">Edit</button>
        <a href="&#10006;">Remove</a>
    `;
    lists[isNeedList ? 0 : 1].appendChild(listItem);

    input.value = '';
    input.focus();
};

// remove , edit and check items 
lists.forEach((ul) =>
    ul.addEventListener('click', (event) => {
        const listItem = event.target.closest('li');

        if (event.target.tagName === 'A') {
            listItem.remove();
        } else if (event.target.type === 'checkbox') {
            const targetList = event.target.checked ? lists[1] : lists[0];
            targetList.appendChild(listItem);
        } else if (event.target.classList.contains('edit')) {
            // Edit item
            const span = listItem.querySelector('span');
            const newValue = prompt('Edit item:', span.textContent);
            if (newValue !== null && newValue.trim()) {
                span.textContent = newValue.trim();
            }
        }
    })
);

// search
searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    lists.forEach((ul) => {
        ul.querySelectorAll('li').forEach((li) => {
            const text = li.querySelector('span').textContent.toLowerCase();
            li.style.display = text.includes(query) ? '' : 'none';
        });
    });
});

// Clear all items
clearAllButton.addEventListener('click', () => {
    lists.forEach((ul) => (ul.innerHTML = ''));
});

document.getElementById('addHave').addEventListener('click', handleAdd);
document.getElementById('addNeed').addEventListener('click', handleAdd);
