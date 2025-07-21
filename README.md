# Dynamic Weather App
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
    git clone [https://github.com/YourUsername/dynamic-weather-app.git](https://github.com/YourUsername/dynamic-weather-app.git)
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd dynamic-weather-app
    ```
3.  **Open `index.html`:** Simply open the `index.html` file in your preferred web browser (e.g., Chrome, Firefox, Edge).
4.  **Enter a city name** in the input field and click the search icon or press `Enter`.

## 🌐 Live Demo

You can see a live demo of the Weather App here:
[https://YourUsername.github.io/dynamic-weather-app/](https://YourUsername.github.io/dynamic-weather-app/)
*(Remember to replace `YourUsername` and `dynamic-weather-app` with your actual GitHub username and repository name after deployment.)*

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
