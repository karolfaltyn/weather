

# Weather 

## Overview

Weather is a web application that allows users to get real-time weather information based on their location or any specified location. The app utilizes the OpenWeatherMap API to fetch weather data, providing users with current weather conditions, temperature, humidity, wind speed, and more.

## Features

- **Real-time Weather Data:** The app fetches the latest weather information from the OpenWeatherMap API, ensuring that users receive up-to-date and accurate data.

- **Location-based Weather:** Users can view the current weather conditions based on their device's geolocation using the Geolocation API or by manually entering a specific location.

- **Detailed Weather Information:** The app displays detailed weather information, including temperature, humidity, wind speed, and weather description.

## Getting Started

To view the website online, visit [https://karolfaltyn.github.io/weather/](https://karolfaltyn.github.io/weather/).

### Prerequisites

1.  OpenWeatherMap API Key:
    
    -   Obtain an API key from OpenWeatherMap by signing up for a free account.
  
 ### Installation

Follow these steps to set up the Weather App on your local machine:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/karolfaltyn/weather.git
   ```

2. Navigate to the Project Directory:
   ```bash
   cd weather
   ```

3. Install dependencies:
   ```bash
   npm install
   ```
   
4. Compile Tailwind code:
    ```bash
   npm run build:tailwind
   ```

6. Set Up API Key:
   - Paste your actual OpenWeatherMap API key into the `.env.build` file.
   - Rename the `.env.build` file to `.env`.

7. Start the development server:

   ```bash
   npm start
   ```

8. Open your browser and visit  [http://localhost:3000](http://localhost:3000/)  to view the application.

## Usage

1. **Allow Location Access:**
   - If you choose to use geolocation, press the pin icon and allow the app to access your location.

2. **Enter Location Manually:**
   - Alternatively, you can manually enter a location in the search bar and press search.

3. **View Weather Details:**
   - Once the location is set, the app will display the current weather details and weather forecast for the specified location.


## Technologies Used

-   **React**: For building dynamic user interfaces.

-   **JavaScript**: Core programming language for client-side functionality.

-   **Tailwind CSS**: Utility-first CSS framework for custom, responsive design.

-   **Material UI**: Comprehensive React UI framework for modern design.

-   **API Integration**: Connecting and interacting with various APIs.

-   **PostCSS**: CSS processor for enhanced styling and optimization.

## License

This project is licensed under the MIT License.
