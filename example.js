import dotenv from "dotenv"; // Import dotenv
import fetch from "node-fetch"; // Import fetch

dotenv.config(); // Load environment variables from .env file

const latitude = "51.5074"; // Latitude for London
const longitude = "-0.1278"; // Longitude for London

const API_URL = process.env.API_URL; // Tomorrow.io API URL
const API_KEY = process.env.API_KEY; // Your Tomorrow.io API Key

(async () => {
  // Construct the URL for the API request
  const url = `${API_URL}?location=${latitude},${longitude}&apikey=${API_KEY}`;

  console.log("Request URL:", url); // Log the request URL for debugging

  // Fetch data from the API
  const response = await fetch(url);

  // Parse the JSON response
  const result = await response.json();

  // Log the weather data
  console.log(result);
})();
