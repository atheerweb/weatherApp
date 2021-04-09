/* Global Variables */
// fetch API
document.addEventListener('click' , weather)
const weather = async ( baseUrl , api , inputValue ) =>{
     baseUrl    = "http://api.openweathermap.org/data/2.5/weather?q=Cairo&appid=";
     api        = "10ffa9fc67e9982b1f9ead91b08820c2"
     inputValue = '';
    const response = await fetch (baseUrl+api)
    try{
        const finalStageData = response.temp.json()
        console.log(finalStageData)
    }catch(error){
        console.log(`failed due to : ${error}`)
    }
}
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();