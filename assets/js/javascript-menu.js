const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav-b');
    nav.classList.toggle('active'); 
}

btnMobile.addEventListener('click', toggleMenu);
