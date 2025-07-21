// --- IMPORTANT: Replace YOUR_API_KEY_HERE with your actual OpenWeatherMap API Key ---
const API_KEY = '2fb59a5c0542e1504bbcb416656040bd'; // Get your key from openweathermap.org
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const ICON_BASE_URL = 'https://openweathermap.org/img/wn/'; // Base URL for weather icons

// Get DOM elements
const cityInput = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');

const loadingIndicator = document.querySelector('.loading-indicator');
const errorMessage = document.querySelector('.error-message');
const weatherInfoDiv = document.querySelector('.weather-info'); // Container for all weather data

const cityNameElem = document.querySelector('.city-name');
const dateTimeElem = document.querySelector('.date-time');
const weatherIconElem = document.querySelector('.weather-icon');
const temperatureElem = document.querySelector('.temperature');
const descriptionElem = document.querySelector('.description');
const humidityElem = document.querySelector('.humidity');
const windSpeedElem = document.querySelector('.wind-speed');
const feelsLikeElem = document.querySelector('.feels-like');
const pressureElem = document.querySelector('.pressure');

// Helper to show/hide elements using flex for proper centering
function showElement(element, displayType = 'flex') {
    element.style.display = displayType;
}

function hideElement(element) {
    element.style.display = 'none';
}

// Function to format current date and time for the given timezone offset
function getCurrentDateTime(timezoneOffsetSeconds) {
    const now = new Date();
    // Calculate the local time for the city by adding its timezone offset to the UTC time
    // `getTimezoneOffset()` returns offset in minutes for the local system, so convert to milliseconds
    // `timezoneOffsetSeconds` is in seconds, so convert to milliseconds
    const localTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + (timezoneOffsetSeconds * 1000));

    const options = {
        weekday: 'long', // e.g., Monday
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false // 24-hour format (e.g., 14:30)
    };
    // Use `en-IN` locale for date/time format common in India
    return localTime.toLocaleString('en-IN', options);
}

// Function to fetch weather data from OpenWeatherMap API
async function getWeatherData(city) {
    // Hide previous info and show loading indicator
    hideElement(weatherInfoDiv);
    hideElement(errorMessage);
    showElement(loadingIndicator, 'flex');

    try {
        // Construct API URL: city, API key, and units (metric for Celsius)
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        // Handle HTTP errors (e.g., 404 Not Found, 401 Unauthorized)
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('City not found! Please check the spelling.');
            } else if (response.status === 401) {
                throw new Error('Invalid API Key. Please check your key or wait for activation!');
            } else {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        }

        const data = await response.json(); // Parse JSON response
        displayWeather(data); // Call function to display data

    } catch (error) {
        console.error("Error fetching weather data:", error);
        displayError(error.message); // Show error to the user
    } finally {
        hideElement(loadingIndicator); // Always hide loading indicator when done
    }
}

// Function to update the HTML with fetched weather data
function displayWeather(data) {
    // Destructure relevant data from the API response
    const { name, main, weather, wind, timezone } = data;

    // Update DOM elements
    cityNameElem.textContent = name;
    dateTimeElem.textContent = getCurrentDateTime(timezone); // Display localized date/time
    temperatureElem.textContent = `${Math.round(main.temp)}°C`;
    descriptionElem.textContent = weather[0].description;
    humidityElem.textContent = `${main.humidity}%`;
    // Convert wind speed from m/s (OpenWeatherMap default) to km/h (1 m/s = 3.6 km/h)
    windSpeedElem.textContent = `${Math.round(wind.speed * 3.6)} km/h`;
    feelsLikeElem.textContent = `${Math.round(main.feels_like)}°C`;
    pressureElem.textContent = `${main.pressure} hPa`; // hPa is common for atmospheric pressure

    // Set weather icon source
    const iconCode = weather[0].icon;
    weatherIconElem.src = `${ICON_BASE_URL}${iconCode}@2x.png`; // Construct icon URL
    weatherIconElem.alt = weather[0].description; // Set alt text for accessibility

    // Show the weather info section and hide error/loading
    showElement(weatherInfoDiv, 'flex');
    hideElement(errorMessage);
}

// Function to display an error message to the user
function displayError(message) {
    errorMessage.textContent = `Error: ${message}`;
    showElement(errorMessage, 'flex'); // Show error message
    hideElement(weatherInfoDiv); // Hide weather info
}

// --- Event Listeners ---

// Event listener for the search button click
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim(); // Get city name from input, remove leading/trailing whitespace
    if (city) {
        getWeatherData(city); // Fetch weather if city name is provided
    } else {
        displayError("Please enter a city name."); // Show error if input is empty
    }
});

// Event listener for "Enter" key press in the city input field
cityInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click(); // Simulate a click on the search button when Enter is pressed
    }
});

// Load weather for a default city (New Delhi) when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    getWeatherData('New Delhi');
});