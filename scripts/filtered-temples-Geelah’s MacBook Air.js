document.addEventListener('DOMContentLoaded', () => {
	const yearElement = document.querySelector('#currentyear');
	const lastModifiedElement = document.querySelector('#lastModified');

	yearElement.textContent = '${new Date().getFullYear()}';
	lastModifiedElement.textContent = '${document.lastModified}';
	lastModifiedElement.classList.add('last-modified');
	lastModifiedElement.style.color = '#CEC288';

	// Hamburger Menu
	const hamButton = document.querySelector('#menu');
	const navigation = document.querySelector('.nav');

	hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	});

	// Home Page Header
	const pageHeader = document.querySelector('pageHeader');
	const defaultHeaderText = 'Home';

	const saveHeaderText = localStorage.getItem('pageHeaderText') || defaultHeaderText;
	pageHeader.textContent = saveHeaderText;
	filterTemples(saveHeaderText);
	
	// Menu Button - click
	const menuItems = document.querySelectorAll('.nav ul li a');
	menuItems.forEach(item => item.addEventListener('click', handleMenuItemClick));

	
	function handleMenuItemClick(event) {
		event.preventDefault();
		const menuItemText = event.target.textContent.trim();
		pageHeader.textContent = menuItemText;
		localStorage.setItem('pageHeaderText', menuItemText);
		filterTemples(menuItemText);
	}

});

// Temple Card
const temples = [
	{ templeName: 'Apia Samoa', location: 'Apia, Samoa', dedicated: '1983, August, 5', area: 18691, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg' },
	{ templeName: 'Bangkok Thailand', location: 'Bangkok, Thailand', dedicated: '2023, October, 22', area: 48525, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-exterior-night-1945721.jpg' },
	{ templeName: 'Cebu City Philippines', location: 'Cebu, Philippines', dedicated: '2010, June, 13', area: 29556, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-exterior-night-1945721.jpg' },
	{ templeName: 'Hong Kong China', location: 'Hong Kong, China', dedicated: '1996, May, 26', area: 51921, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/okinawa-japan/400x250/okinawa-japan-exterior-night-1945721.jpg' },
	{ templeName: 'Manila Philippines', location: 'Manila, Philippines', dedicated: '1984, September, 25', area: 26683, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/okinawa-japan/400x250/okinawa-japan-exterior-night-1945721.jpg' },
	{ templeName: 'Provo City Center Utah', location: 'Provo City, Utah, United States', dedicated: '2016, March, 20', area: 85084, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg' },
	{ templeName: 'San Diego California', location: 'San Diego, California, United States', dedicated: '1993, April, 25', area: 72000, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-exterior-night-1945721.jpg' },
	{ templeName: 'St. George Utah', location: 'St. George, Utah, United States', dedicated: '1877, April, 6', area: 143969, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-exterior-night-1945721.jpg' },
	{ templeName: 'Urdaneta Philippines', location: 'Urdaneta, Philippines', dedicated: '2024, April, 28', area: 32604, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/okinawa-japan/400x250/okinawa-japan-exterior-night-1945721.jpg' },
	{ templeName: 'Sapporo Japan', location: 'Sapporo, Japan', dedicated: '2016, August, 21', area: 48480, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/4-Rome-Temple-2160935.jpg' },
	{ templeName: 'Rome Italy', location: 'Rome, Italy', dedicated: '2019, March, 12', area: 41010, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/4-Rome-Temple-2160935.jpg' },
	{ templeName: 'Yigo Guam', location: 'Yigo, Guam', dedicated: '2020, May, 2', area: 6861, imageUrl: 'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg' },
];

// Temple Card - Filter
function createTempleCard(filteredTemples) {
    const container = document.querySelector(".temple-cards");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        card.innerHTML = `
			<img src="${temple.imageUrl}" alt="${temple.templeName}">
            <h3>${temple.templeName}</h3>
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Size:</span> ${temple.area} sq ft</p>
            <img src='${temple.imageUrl}' alt='${temple.templeName} Temple' loading='lazy' width='320' height='200'>
        `;
        container.appendChild(card);
    });
}

function filterTemples(criteria) {
    let filteredTemples;

    switch (criteria) {
        case 'Old':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() <= 1900);
            break;
        case 'New':
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'Home':
        default:
            filteredTemples = temples;
            break;
    }

    createTempleCard(filteredTemples);
}

