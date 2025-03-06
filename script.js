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
});
