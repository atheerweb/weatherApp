/* Global Variables */
button = document.getElementById("generate");
textArea = document.getElementById("feelings");
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
const api = "&appid=10ffa9fc67e9982b1f9ead91b08820c2";
const inputValue = document.querySelector("#zip");
feeling = document.querySelector("#feelings");
// fetch API data

const weather = async (base, API, zip) => {
  const response = await fetch(base + zip + API);
  try {
    const finalStageData = response.json();
    return finalStageData;
  } catch (error) {
    console.log(`failed due to : ${error}`);
  }
};
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();
// posting api data
const postingData = async (url = "", pData = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pData),
  });
  try {
    const finalStageData = response.json();
    return finalStageData;
  } catch (error) {
    console.log(`failed due to : ${error}`);
  }
};
const updatingClientInterface = async () => {
  const request = await fetch('/allData');
  try{
    const all = await request.json();
    document.getElementById('date').innerHTML = all[0].date;
    document.getElementById('temp').innerHTML = all[0].temp;
    document.getElementById('emotions').innerHTML = textArea.value ;
    document.getElementById('zipo').innerHTML = inputValue.value ;
  }catch(error){
    console.log("error", error);
  }
}
button.addEventListener("click", () => {
  weather(baseUrl, api, inputValue.value).then((data) => {
    // we did this because the code runs with sync and the console.log is finished though promise is still pending so we use then to access the promise object
  postingData('/weather' , {temp : data.main.temp , date:newDate} )
  updatingClientInterface()
  });
});
