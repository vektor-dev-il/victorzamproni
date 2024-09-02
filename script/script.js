
document.addEventListener("DOMContentLoaded", function() {
    const toggleThemeButton = document.getElementById("toggle-theme");

    // Alternar entre os modos
    toggleThemeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.querySelectorAll('header, footer').forEach(el => el.classList.toggle('dark-mode'));
        document.querySelectorAll('nav ul li a').forEach(el => el.classList.toggle('dark-mode'));

        // Atualiza o texto do botão de alternância
        if (document.body.classList.contains('dark-mode')) {
            this.textContent = 'Modo Diurno';
        } else {
            this.textContent = 'Modo Noturno';
        }
    });
});

