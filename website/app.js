/* Global Variables */
// fetch API
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
  const api = "&appid=10ffa9fc67e9982b1f9ead91b08820c2";
  const inputValue = document.querySelector("#zip")
  feeling = document.querySelector("#feelings")

const weather = async (base, API, zip) => {
  const response = await fetch(base + zip + API);
  try {
    const finalStageData = response.json();
    return(finalStageData)
  } catch (error) {
    console.log(`failed due to : ${error}`);
  }
};
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();


const printInfo = () => {
    console.log(weather(baseUrl , api ,inputValue.value ) )
}

document.querySelector("#generate").addEventListener("click", printInfo) 