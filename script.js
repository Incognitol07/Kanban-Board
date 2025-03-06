document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 1. Remove 'active' from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // 2. Hide all content
            contents.forEach(c => c.classList.remove('active-content'));
    
            // 3. Mark this tab as active
            tab.classList.add('active');
            // 4. Show the corresponding content
            const targetClass = tab.getAttribute('data-target'); // e.g. 'content-2'
            document.querySelector(`.${targetClass}`).classList.add('active-content');
        });
    });

    const sortBtn = document.getElementById('sortDropdownBtn');
    const sortMenu = document.getElementById('sortDropdownMenu');
    const sortItems = document.querySelectorAll('.sort-dropdown-item');

    // Toggle open/close on button click
    sortBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // prevent click from bubbling
        // Toggle the menu
        sortMenu.classList.toggle('show');
        // Toggle the arrow rotation
        sortBtn.classList.toggle('open');
    });

    // Close dropdown if user clicks outside
    document.addEventListener('click', (e) => {
        if (!sortBtn.contains(e.target) && !sortMenu.contains(e.target)) {
        sortMenu.classList.remove('show');
        sortBtn.classList.remove('open');
        }
    });

    // Handle clicks on each dropdown item
    sortItems.forEach(item => {
        item.addEventListener('click', () => {
        // 1. Update button text to chosen value
        sortBtn.firstChild.textContent = item.textContent.trim();

        // 2. Hide the dropdown
        sortMenu.classList.remove('show');
        sortBtn.classList.remove('open');
        });
    });
});
