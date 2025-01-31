document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const links = document.querySelector('.links');

    menuToggle.addEventListener('click', () => {
        console.log("Menu clicked");
        links.classList.toggle('active');
    });
});