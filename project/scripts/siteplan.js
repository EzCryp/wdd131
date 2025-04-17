// Footer JS
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    yearElement.textContent = `${new Date().getFullYear()}`;
    lastModifiedElement.textContent = ` ${document.lastModified}`;
    lastModifiedElement.classList.add('last-modified');
});