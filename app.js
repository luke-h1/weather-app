
async function getWeatherData(e){
  const city = document.querySelector('.form-control').value; 
  const API_KEY = `YOUR_API_KEY_HERE`; 
  const API_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}` 
  e.preventDefault(); 
  try {
    let start = new Date().getTime(); 
    await fetch(API_URL)
      .then((res) => res.json())
      .then((res) => { 
        console.log(res);  
        const cityRegion = document.querySelector('.city-region'); 
        const temperature = document.querySelector('.temp'); 
        const description = document.querySelector('.condition'); 
        const feel = document.querySelector('.feels-like'); 
        const humidity = document.querySelector('.humidity')
        let output = `
        <ul class="list-group list-group-flush" style="text-align: center;">
        <img src="${res.current.condition.icon}" alt="" />  
          <li class="list-group-item city-region">${res.location.name} , ${res.location.region}</li>
          <li class="list-group-item temp">Current Temp: ${res.current.temp_c}°C </li>
          <li class="list-group-item feels-like">Feels Like: ${res.current.feelslike_c}°C</li>
          <li class="list-group-item humidity">Humidity: ${res.current.humidity}%</li>
          <li class="list-group-item condition">Wind: ${res.current.wind_mph}MPH</li>
        </ul>
        `
        document.querySelector('.card').innerHTML = output;
      }); 

    
  } catch (error) { 
    console.log(error); 
}

} 
const button = document.getElementById('yay'). addEventListener('click', getWeatherData); 
 