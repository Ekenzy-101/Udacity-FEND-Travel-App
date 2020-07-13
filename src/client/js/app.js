import { updateUI, postData } from "./views/plannerView";
import Planner from "./models/Planner";

// State of the Application
let state = {};
// Controller for the App
export const Controller = async () => {
  let destination = document.getElementById("destination").value;
  if (destination) {
    state = new Planner();
    let localData = {};
    let geoData = {};
    let weatherData = {};
    let pictureData = {};

    geoData = await state.getLocationData(
      process.env.GEOURL,
      process.env.USERNAME,
      destination
    );

    weatherData = await state.getWeatherData(
      process.env.WEATHERURL,
      `key=${process.env.WEATHERBITKEY}&city=`,
      destination
    );

    pictureData = await state.getPictureData(
      process.env.PICTUREURL,
      process.env.PIXABAYKEY,
      destination
    );

    localData.destination = geoData.name;
    localData.country = geoData.countryName;
    localData.latitude = geoData.lat;
    localData.longitude = geoData.lng;
    localData.highTemp = weatherData.high_temp;
    localData.lowTemp = weatherData.low_temp;
    localData.picture = pictureData.webformatURL;

    await updateUI(localData);
    await postData("http://localhost:3050/add", localData);
  }
};
