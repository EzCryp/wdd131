document.addEventListener('DOMContentLoaded', () => {
    // Footer JS
    const yearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    yearElement.textContent = `${new Date().getFullYear()}`;
    lastModifiedElement.textContent = ` ${document.lastModified}`;
    lastModifiedElement.classList.add('last-modified');

    // Hamburger Menu functionality
    const hamButton = document.querySelector('#menu-button');
    const navigation = document.querySelector('header nav ul');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    // Close menu when a link is clicked (for mobile)
    document.querySelectorAll('header nav ul li a').forEach(item => {
        item.addEventListener('click', () => {
            navigation.classList.remove('open');
            hamButton.classList.remove('open');
        });
    });

    // Form Select 'Countries'
    const countrySelect = document.getElementById('country');
    const countries = ['Mexico', 'Peru', 'Hong Kong', 'Indonesia', 'South Korea', 'Guatemala', 'Costa Rica', 'Singapore', 'Italy', 'United States', 'Japan', 'Philippines', 'Guam'];

    countries.forEach(country => {
        const option = document.createElement('option');
        option.value = country;
        option.textContent = country;
        countrySelect.appendChild(option);
    });

    // Submission counter
    const form = document.querySelector('.form');
    form.addEventListener('submit', () => {
        let submissionCount = localStorage.getItem('submissionCount');

        if (submissionCount === null) {
            submissionCount = 0;
        } else {
            submissionCount = parseInt(submissionCount, 10);
        }

        submissionCount++;

        localStorage.setItem('submissionCount', submissionCount);
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


// CFM Gallery Cards
document.addEventListener('DOMContentLoaded', () => {
    const cfmCards = [
        {
            topic: "The Rise of the Church of Christ",
            date: "March 10 - 16",
            ref: "Doctrine and Covenants 20 - 22",
            image: "images/1.webp",
            link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/11-doctrine-and-covenants-20-22?lang=eng"
        },
        {
            topic: "Seek For the Things of a Better Worlds",
            date: "March 17 - 23",
            ref: "Doctrine and Covenants 23 - 26",
            image: "images/2.webp",
            link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/12-doctrine-and-covenants-23-26?lang=eng"
        },
        {
            topic: "All Things Must Be Done in Order",
            date: "March 24 - 30",
            ref: "Doctrine and Covenants 27 - 28",
            image: "images/3.webp",
            link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/13-doctrine-and-covenants-27-28?lang=eng"
        },
        {
            topic: "Jesus Christ Will Gather His People",
            date: "March 31 - April 6",
            ref: "Doctrine and Covenants 29",
            image: "images/4.webp",
            link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/14-doctrine-and-covenants-29?lang=eng"
        },
        {
            topic: "“Lift Up Your Voices … to Declare My Gospel",
            date: "April 7 -  13",
            ref: "Doctrine and Covenants 30 - 36",
            image: "images/5.webp",
            link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/15-doctrine-and-covenants-30-36?lang=eng"
        },
        {
            topic: "I Am He Who Liveth, I Am He Who Was Slain",
            date: "April 14 - 20",
            ref: "Easter",
            image: "images/6.webp",
            link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/16-doctrine-and-covenants-easter?lang=eng"
        },
        {
            topic: "If Ye Are Not One Ye Are Not Mine",
            date: "April 21 - 27",
            ref: "Doctrine and Covenants 37 - 40",
            image: "images/7.webp",
            link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/17-doctrine-and-covenants-37-40?lang=eng"
        },
        {
            topic: "My Law to Govern My Church",
            date: "April 28 - May 4",
            ref: "Doctrine and Covenants 41 - 44",
            image: "images/8.webp",
            link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/18-doctrine-and-covenants-41-44?lang=eng"
        },
        {
            topic: "Seek Ye Earnestly the Best Gifts",
            date: "May 5 - 11",
            ref: "Doctrine and Covenants 45",
            image: "images/9.webp",
            link: "https://www.churchofjesuschrist.org/study/manual/come-follow-me-for-home-and-church-doctrine-and-covenants-2025/19-doctrine-and-covenants-45?lang=eng"
        }
    ];

    // Create CFM Cards
    const container = document.getElementById('cfm-cards');
    cfmCards.forEach(cfm => {
        const card = document.createElement('div');
        card.className = 'cfm-card';
        card.innerHTML = `
            <div class="cfm-card-image">
                <img src="${cfm.image}" alt="${cfm.topic}" loading="lazy" width="350" height="auto">
            </div>
            <div class="cfm-card-content">
                <h3 class="cfm-card-title">${cfm.topic}</h3>
                <p class="cfm-card-date"><strong>Date:</strong> ${cfm.date}</p>
                <p class="cfm-card-ref"><strong>Reference:</strong> ${cfm.ref}</p>
                <a href="${cfm.link}" target="_blank" class="cfm-card-link">Read More</a>
            </div>
        `;
        container.appendChild(card);
    });
});
