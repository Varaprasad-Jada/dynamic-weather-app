/* General Body Styles */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    /* Gradient background inspired by the image's blue-purple tones */
    background: linear-gradient(135deg, #89F7FE 0%, #66A6FF 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box; /* Ensures padding is included in element's total size */
    color: #333;
    overflow-x: hidden; /* Prevent horizontal scroll on smaller devices */
}

/* Main Weather App Container - The 'Glass' Card */
.weather-app-container {
    background: rgba(255, 255, 255, 0.2); /* Semi-transparent white for glass effect */
    border-radius: 25px;
    border: 1px solid rgba(255, 255, 255, 0.3); /* Subtle border for definition */
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    backdrop-filter: blur(10px); /* The key for the frosted glass effect */
    -webkit-backdrop-filter: blur(10px); /* For Safari browser compatibility */
    text-align: center;
    width: 100%;
    max-width: 550px; /* Maximum width for the app on larger screens */
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px; /* Space between the search bar and weather info */
    position: relative; /* Needed for positioning loading/error overlays */
}

/* Search Box Layout */
.search-box {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px; /* Space between input field and search button */
    margin-bottom: 20px;
}

#cityInput {
    flex-grow: 1; /* Allows input to take up available horizontal space */
    padding: 14px 25px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 30px; /* Highly rounded input field */
    background: rgba(255, 255, 255, 0.3); /* Slightly more opaque background than container */
    font-size: 1.1em;
    color: #333;
    outline: none; /* Remove default focus outline */
    transition: all 0.3s ease; /* Smooth transitions for hover/focus */
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.05); /* Subtle inner shadow */
}

#cityInput::placeholder {
    color: rgba(51, 51, 51, 0.6); /* Lighter placeholder text */
}

#cityInput:focus {
    border-color: rgba(255, 255, 255, 0.6); /* Border highlight on focus */
    background: rgba(255, 255, 255, 0.5); /* Slightly more opaque on focus */
    box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(102, 166, 255, 0.5); /* Outer glow on focus */
}

#searchBtn {
    background: rgba(255, 255, 255, 0.3); /* Frosted button background */
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%; /* Makes the button perfectly circular */
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.3em;
    color: #333; /* Dark icon color */
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for lift effect */
}

#searchBtn:hover {
    background: rgba(255, 255, 255, 0.5); /* More opaque on hover */
    transform: translateY(-2px); /* Slight lift effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* Enhanced shadow on hover */
}

#searchBtn:active {
    transform: translateY(0); /* Returns to original position on click */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Reduced shadow on click */
}

/* Weather Content Area - Contains all weather info, messages */
.weather-content {
    min-height: 250px; /* Ensures minimum height for consistency */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center content */
    align-items: center; /* Horizontally center content */
    position: relative; /* For absolutely positioned loading/error messages */
}

/* Loading and Error Message Styles */
.loading-indicator, .error-message {
    position: absolute; /* Position over other content */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Center perfectly */
    font-size: 1.2em;
    font-weight: 500;
    color: #444;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.7); /* Semi-transparent background */
    padding: 15px 30px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    z-index: 10; /* Ensure it's on top */
    white-space: nowrap; /* Prevent text wrapping */
}

.loading-indicator i {
    margin-right: 10px;
    color: #66A6FF; /* Icon color */
}

.error-message {
    color: #d9534f; /* Red error text */
    background: rgba(255, 230, 230, 0.8); /* Light red background */
    border-color: rgba(255, 200, 200, 0.8); /* Red border */
}
.error-message i {
    color: #d9534f; /* Red icon */
    margin-right: 10px;
}

/* Weather Information Display */
.weather-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px; /* Space between city name, main weather, and details */
}

.city-name {
    font-size: 2.5em;
    font-weight: 600;
    color: #333;
    margin: 0;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.6);
}

.date-time {
    font-size: 1em;
    color: #555;
    margin: -10px 0 10px; /* Adjust spacing relative to city name */
}

/* Main Weather Section (Icon, Temp, Description) */
.main-weather {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
}

.weather-icon {
    width: 150px;
    height: 150px;
    object-fit: contain; /* Ensures icon scales correctly */
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 0.2)); /* Shadow for the icon */
}

.temperature {
    font-size: 5em; /* Very large and prominent temperature */
    font-weight: 700;
    color: #333;
    margin: 0;
    line-height: 1; /* Prevents extra spacing around large text */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.description {
    font-size: 1.5em;
    font-weight: 400;
    color: #555;
    text-transform: capitalize; /* Capitalize the first letter of the description */
    margin-top: 5px;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
}

/* Additional Details Section (Humidity, Wind, Feels Like, Pressure) */
.details {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Two columns by default */
    gap: 20px; /* Space between detail items */
    width: 100%;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.4); /* Separator line */
}

.col { /* Renamed from detail-item to col for consistency with common naming */
    background: rgba(255, 255, 255, 0.3); /* Frosted background for each detail item */
    border-radius: 15px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.4);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease;
}

.col:hover {
    transform: translateY(-5px); /* Slight lift on hover */
}

.col i {
    font-size: 1.8em;
    color: #66A6FF; /* Icon color */
    margin-bottom: 8px;
}

.detail-label {
    font-size: 0.9em;
    color: #777;
    margin-bottom: 5px;
}

.col p { /* Target the values within the columns */
    font-size: 1.3em;
    font-weight: 600;
    color: #333;
    margin: 0; /* Remove default paragraph margins */
}


/* --- Responsive Design (Media Queries) --- */

/* For Tablets and smaller desktops (e.g., max-width: 768px) */
@media (max-width: 768px) {
    .weather-app-container {
        padding: 25px;
        border-radius: 20px;
        gap: 20px;
    }

    .search-box {
        gap: 10px;
    }

    #cityInput {
        padding: 12px 20px;
        font-size: 1em;
    }

    #searchBtn {
        width: 45px;
        height: 45px;
        font-size: 1.2em;
    }

    .city-name {
        font-size: 2em;
    }

    .weather-icon {
        width: 120px;
        height: 120px;
    }

    .temperature {
        font-size: 4em;
    }

    .description {
        font-size: 1.3em;
    }

    .details {
        grid-template-columns: repeat(2, 1fr); /* Remains 2 columns */
        gap: 15px;
    }

    .col i {
        font-size: 1.6em;
    }

    .col p {
        font-size: 1.2em;
    }
}

/* For Mobile devices (e.g., max-width: 480px) */
@media (max-width: 480px) {
    body {
        padding: 15px;
    }

    .weather-app-container {
        padding: 20px;
        border-radius: 15px;
        gap: 15px;
    }

    .search-box {
        flex-direction: column; /* Stack input and button vertically */
        gap: 15px;
    }

    #cityInput {
        width: 100%; /* Full width when stacked */
        max-width: none; /* Override max-width */
        font-size: 1em;
        padding: 10px 18px;
    }

    #searchBtn {
        width: 100%; /* Full width when stacked */
        border-radius: 12px; /* Make it rectangular */
        height: auto;
        padding: 10px 0; /* Adjust vertical padding */
        font-size: 1.1em;
    }

    .city-name {
        font-size: 1.8em;
    }

    .weather-icon {
        width: 100px;
        height: 100px;
    }

    .temperature {
        font-size: 3.5em;
    }

    .description {
        font-size: 1.1em;
    }

    .details {
        grid-template-columns: 1fr; /* Single column on smallest screens */
        gap: 15px;
    }

    .col {# Dynamic Weather App

A responsive web application that fetches and displays current weather information for any city using the OpenWeatherMap API. The design is inspired by the modern glassmorphism UI trend, ensuring a clean and visually appealing experience that automatically adapts to various device screen sizes (mobile, tablet, desktop).

## ✨ Features

* **Real-time Weather Data:** Displays current temperature (°C), weather description, humidity, wind speed (km/h), "feels like" temperature, and atmospheric pressure (hPa).
* **City Search:** Easily search for weather in any city worldwide.
* **Dynamic Icons:** Weather conditions are represented by corresponding animated icons from OpenWeatherMap.
* **Current Date & Time:** Shows the localized date and time for the searched city.
* **Responsive Glassmorphism Design:** Optimized for seamless viewing and interaction across desktop, tablet, and mobile devices using CSS Media Queries, Flexbox, and a frosted glass (glassmorphism) aesthetic.
* **Error Handling:** Provides user-friendly messages for "city not found," API key issues, or network problems.
* **Loading Indicator:** Displays a spinner animation while fetching weather data.
* **Default City Load:** Shows weather for "New Delhi" on initial page load (can be customized).

## 🚀 Technologies Used

* **HTML5:** Structured the web page content semantically.
* **CSS3:** Styled the application, implementing the glassmorphism design, responsive layouts with `flexbox` and `grid`, and `@media` queries for different screen sizes.
* **JavaScript (ES6+):** Handled API requests using `fetch()`, parsed JSON responses, dynamically updated the DOM, and managed application state.
* **OpenWeatherMap API:** The public API used for fetching comprehensive weather data.
* **Font Awesome:** Utilized for various icons (search, humidity, wind, error, loading, thermometer, cloud).
* **Google Fonts (Poppins):** For modern and legible typography throughout the application.

## 🔑 Setup and API Key

1.  **Get Your Free API Key:**
    * Visit the official [OpenWeatherMap API](https://openweathermap.org/api) website.
    * Sign up for a free account.
    * Once logged in, navigate to your "API keys" section to generate or find your personal API key. *Note: New API keys may take a few minutes to become active.*
2.  **Insert API Key into Code:**
    * Open the `script.js` file in your project.
    * Locate the line: `const API_KEY = 'YOUR_API_KEY_HERE';`
    * **Replace `'YOUR_API_KEY_HERE'` with the actual API key you obtained from OpenWeatherMap.**

## 📦 How to Use/Run

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Varaprasad-Jada/dynamic-weather-app.git](https://github.com/Varaprasad-Jada/dynamic-weather-app.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd dynamic-weather-app
    ```
3.  **Open `index.html`:** Simply open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox, Edge).
4.  **Enter a city name** in the input field and click the search icon or press `Enter`.

## 🌐 Live Demo

You can see a live demo of the Weather App here:
[https://Varaprasad-Jada.github.io/dynamic-weather-app/](https://Varaprasad-Jada.github.io/dynamic-weather-app/)
*(Remember to replace `Varaprasad-Jada` and `dynamic-weather-app` with your actual GitHub username and repository name after deployment.)*

## 📸 Screenshots

*(Add screenshots of your weather app here! It's highly recommended to include screenshots on different devices/screen sizes to truly showcase its responsiveness and the glassmorphism design.)*

## 📝 Future Enhancements (Ideas for further development)

* **Dynamic Backgrounds:** Change the `body` background gradient or image based on the current weather condition (e.g., sunny, rainy, cloudy, snowy) or time of day (day/night).
* **5-Day/Hourly Forecast:** Integrate the OpenWeatherMap 5-day / 3-hour forecast API to display upcoming weather conditions.
* **Unit Conversion:** Add a toggle button to allow users to switch between Celsius and Fahrenheit.
* **Geolocation:** Implement browser geolocation to automatically detect the user's location and display local weather.
* **Search History:** Store recent city searches using Local Storage for quick access.
* **Accessibility Improvements:** Enhance keyboard navigation and screen reader support.

---

Feel free to explore, fork, and contribute!
        flex-direction: row; /* Layout items horizontally within each detail item */
        justify-content: space-between;
        padding: 12px 20px;
    }

    .col i {
        font-size: 1.5em;
        margin-right: 10px; /* Space between icon and text */
        margin-bottom: 0;
    }

    .detail-label {
        flex-grow: 1; /* Allow label to take space */
        text-align: left;
        margin-bottom: 0;
    }

    .col p { /* The value itself */
        font-size: 1.1em;
        margin-left: auto; /* Push value to the right */
    }
}