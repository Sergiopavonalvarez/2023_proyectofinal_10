function updateHeader(event) {
    event.preventDefault(); // Evita que se abra el enlace en una nueva pestaña

    const headerContent = document.querySelector('.header-content');
    const targetImageAlt = event.target.alt;

    headerContent.textContent = targetImageAlt;
}