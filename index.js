document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('serverBox');
    const toastEl = document.getElementById('copyToast');

    if (!box || !toastEl) {
        console.error('Missing element:', { box, toastEl });
        return;
    }

    const toast = bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2000 });

    box.addEventListener('click', async () => {
        const link = 'https://your-link-here.com';

        try {
            await navigator.clipboard.writeText(link);
        } catch (err) {
            const temp = document.createElement('textarea');
            temp.value = link;
            document.body.appendChild(temp);
            temp.select();
            document.execCommand('copy');
            temp.remove();
        }

        toast.show();
    });
});


const toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-bs-theme', newTheme);
    // Optional: Save preference to localStorage
    localStorage.setItem('theme', newTheme);
};

document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);   