const btnMobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav-b');
    nav.classList.toggle('active'); 
    btnMobile.classList.toggle('active');

    const btnIcon = document.querySelector('.bi');
    if (nav.classList.contains('active')) {
        btnIcon.classList.remove('bi-list'); // Remove a classe do ícone de lista
        btnIcon.classList.add('bi-x-lg'); // Adiciona a classe do ícone "x"
        btnMobile.style.animation = 'spin 0.3s forwards';
    } else {
        btnIcon.classList.remove('bi-x-lg'); // Remove a classe do ícone "x"
        btnIcon.classList.add('bi-list'); // Adiciona a classe do ícone de lista
        btnMobile.style.animation = 'spin-reverse 0.3s forwards'; // Remove a animação
    }
}

btnMobile.addEventListener('click', toggleMenu);
