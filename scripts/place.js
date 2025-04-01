document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("currentyear").textContent = new Date().getFullYear();

const lastModifiedElement = document.querySelector("#lastModified");
lastModifiedElement.style.color = "#CEC288";


// Function to calculate wind chill factor in Celsius
function calculateWindChill(temperatureCelsius, windSpeedKmph) {
    return 13.12 + 0.6215 * temperatureCelsius - 11.37 * Math.pow(windSpeedKmph, 0.16) + 0.3965 * temperatureCelsius * Math.pow(windSpeedKmph, 0.16);
}

document.addEventListener('DOMContentLoaded', () => {
    const temperatureCelsius = 5;  // Temperature in °C
    const windSpeedKmph = 10;     // Wind speed in km/h

    const windChillElement = document.querySelector('#wind-chill-value');
    let result = "";

    // Calculate wind chill only if temperature is <= 10°C and wind speed is > 4.8 km/h
    // If the conditions are met, calculate wind chill
    if (temperatureCelsius <= 10 && windSpeedKmph > 4.8) {
        const windChillCelsius = calculateWindChill(temperatureCelsius, windSpeedKmph);
        result = `${windChillCelsius.toFixed(1)} °C`;
    // Otherwise, display "N/A" which means "Not Applicable"
    } else {
        result = "N/A";
    }

    windChillElement.innerHTML = `<span class="wind-chill">${result}</span>`;
});