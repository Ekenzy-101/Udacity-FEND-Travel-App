export const updateUI = async (data) => {
  try {
    document
      .querySelectorAll(".city")
      .forEach((el) => (el.innerHTML = data.destination));
    document
      .querySelectorAll(".country")
      .forEach((el) => (el.innerHTML = data.country));
    document.getElementById("lat").innerHTML = data.latitude;
    document.getElementById("lng").innerHTML = data.longitude;
    document.getElementById("high-temp").innerHTML = data.highTemp;
    document.getElementById("low-temp").innerHTML = data.lowTemp;
    document.querySelector(".img").setAttribute("src", `${data.picture}`);

    let startingDate = document.getElementById("start-date").value;
    let endingDate = document.getElementById("end-date").value;
    let startArray = startingDate.split("-").reverse();
    let endArray = endingDate.split("-").reverse();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date(...startArray);
    const secondDate = new Date(...endArray);
    const days = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    document.getElementById("duration").innerHTML = `${days}`;
  } catch (error) {
    alert("error", error);
  }
};

export const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(data),
  });

  try {
    let newData = await response.json();
  } catch (error) {
    alert("error", error);
  }
};
