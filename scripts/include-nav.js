document.addEventListener('DOMContentLoaded', () => {
    fetch('partials/nav.html')
        .then(r => r.text())
        .then(html => {
            document.getElementById('nav-placeholder').innerHTML = html;
            const current = location.pathname.split('/').pop() || 'index.html';
            document.querySelectorAll('.top-nav a').forEach(a => {
                if (a.getAttribute('href') === current) a.classList.add('active');
            });
        })
        .catch(console.error);
});
