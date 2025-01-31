function showContent(tab, element) {
    // Oculta todos los contenidos
    document.querySelectorAll('.contenido_tab').forEach(c => c.classList.remove('active'));
    document.getElementById(tab).classList.add('active');

    // Remueve la clase activa de todas las pestañas
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('tab-active'));
    element.classList.add('tab-active');
}