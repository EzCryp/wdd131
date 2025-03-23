document.getElementById("lastModified").textContent = document.lastModified;

document.getElementById("currentyear").textContent = new Date().getFullYear();

// Header 1 - Hamburguer Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});