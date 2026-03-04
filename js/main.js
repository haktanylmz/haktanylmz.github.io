function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.toggle('hidden');
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log(err.message);
        });
    } else {
        if (document.exitFullscreen) document.exitFullscreen();
    }
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

if(localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
}

function toggleDownloadMenu() {
    const menu = document.getElementById('downloadMenu');
    if (menu) menu.classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.closest('.icon') && !event.target.closest('.dropdown-menu') && !event.target.closest('.svg-icon')) {
        const dropdowns = document.getElementsByClassName("dropdown-menu");
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) dropdowns[i].classList.remove('show');
        }
    }
}