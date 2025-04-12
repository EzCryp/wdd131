// Footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    yearElement.textContent = `${new Date().getFullYear()}`;
    lastModifiedElement.textContent = ` ${document.lastModified}`;
    lastModifiedElement.classList.add('last-modified');

    // Hamburger Menu
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.nav');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    // Dynamic Header
    const pageHeader = document.getElementById('pageHeader');
    const defaultHeaderText = 'Home';

    const savedHeaderText = localStorage.getItem('pageHeaderText') || defaultHeaderText;
    pageHeader.textContent = savedHeaderText;
    filterTemples(savedHeaderText);

    // Menu Item Click Handler
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

// Temple Data
const temples = [
    { templeName: "Aba Nigeria", location: "Aba, Nigeria", dedicated: "2005, August, 7", area: 11500, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg" },
    { templeName: "Manti Utah", location: "Manti, Utah, United States", dedicated: "1888, May, 21", area: 74792, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg" },
    { templeName: "Payson Utah", location: "Payson, Utah, United States", dedicated: "2015, June, 7", area: 96630, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg" },
    { templeName: "Yigo Guam", location: "Yigo, Guam", dedicated: "2020, May, 2", area: 6861, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg" },
    { templeName: "Washington D.C.", location: "Kensington, Maryland, United States", dedicated: "1974, November, 19", area: 156558, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg" },
    { templeName: "Lima Perú", location: "Lima, Perú", dedicated: "1986, January, 10", area: 9600, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg" },
    { templeName: "Mexico City Mexico", location: "Mexico City, Mexico", dedicated: "1983, December, 2", area: 116642, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg" },
    { templeName: "Salt Lake", location: "Salt Lake City, Utah, United States", dedicated: "1893, April, 6", area: 382207, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple7.jpg" },
    { templeName: "Rome Italy", location: "Rome, Italy", dedicated: "2019, March, 12", area: 41010, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/4-Rome-Temple-2160935.jpg" },
    { templeName: "Sapporo Japan", location: "Sapporo, Japan", dedicated: "2016, August, 21", area: 48480, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg" },
    { templeName: "San Juan Puerto Rico", location: "San Juan, Puerto Rico", dedicated: "2023, January, 15", area: 6988, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-juan-puerto-rico/400x250/san_juan_puerto_rico_temple_exterior.jpeg" },
    { templeName: "San Jose Costa Rica", location: "Heredia, Costa Rica", dedicated: "2000, June, 4", area: 10700, imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-jose-costa-rica/400x250/san-jose-costa-rica-temple-lds-83515-wallpaper.jpg" }
];

function createTempleCard(filteredTemples) {
    const container = document.querySelector(".temple-cards");
    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("section");
        card.innerHTML = `
		
            <h3>${temple.templeName}</h3>
			<img src="${temple.imageUrl}" alt="${temple.templeName} Temple" loading="lazy" width="300" height="200">
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Size:</span> ${temple.area} sq ft</p>
            
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
            filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2020);
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
