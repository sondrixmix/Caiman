document.getElementById('menu-toggle').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.left === '-400px') {
        mobileMenu.style.left = '0';
    } else {
        mobileMenu.style.left = '-400px';
    }
});

// Función para cerrar el menú al hacer clic en el ícono de cerrar
document.getElementById('close-menu').addEventListener('click', function() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.style.left = '-400px';
});