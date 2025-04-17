// Footer
document.addEventListener('DOMContentLoaded', () => {
    const yearElement = document.querySelector("#currentyear");
    const lastModifiedElement = document.querySelector("#lastModified");

    yearElement.textContent = `${new Date().getFullYear()}`;
    lastModifiedElement.textContent = ` ${document.lastModified}`;
    lastModifiedElement.classList.add('last-modified');
});

// Dynamic Array
document.addEventListener('DOMContentLoaded', () => {
    const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
    ];

    const selectElement = document.getElementById('productSelect');

    // Create and append product options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = `${product.name} (Rating: ${product.avgRating})`;
        selectElement.appendChild(option);
    });
});

// Review counter for review.html
document.addEventListener('DOMContentLoaded', () => {
    // Get the review count from localStorage
    let reviewCount = localStorage.getItem('reviewCount');

    // If there is no review count, initialize it to 0
    if (reviewCount === null) {
        reviewCount = 0;
    } else {
        reviewCount = parseInt(reviewCount, 10);
    }

    // Increment the review count
    reviewCount++;

    // Save the new review count in localStorage
    localStorage.setItem('reviewCount', reviewCount);
});