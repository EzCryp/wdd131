// Dynamically populate the current year
const yearElement = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Dynamically populate the last modified date
const lastModifiedElement = document.getElementById('lastModified');
lastModifiedElement.textContent = 'Last Modification: ' + document.lastModified;