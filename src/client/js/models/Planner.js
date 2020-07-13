export default class Planner {
  // Using fetch to make a GET request to WeatherBit API
  getWeatherData = async (url, key, destination) => {
    const response = await fetch(`${url}${key}${destination}`);
    try {
      const result = await response.json();
      return result.data["0"];
    } catch (error) {
      alert(error);
    }
  };

  // Using fetch to make a GET request to GeoNames API
  getLocationData = async (url, username, destination) => {
    const response = await fetch(`${url}${username}${destination}`);
    try {
      const data = await response.json();
      return data.geonames["0"];
    } catch (error) {
      alert(error);
    }
  };

  // Using fetch to make a GET request to PixaBay API
  getPictureData = async (url, key, destination) => {
    const response = await fetch(`${url}${key}${destination}`);
    try {
      const data = await response.json();
      return data.hits["0"];
    } catch (error) {
      alert(error);
    }
  };
}
