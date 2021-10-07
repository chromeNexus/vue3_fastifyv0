<template>
  <div class="about">
    <h1>Current Weather</h1>
      <div class="enter-city">
        <input
        v-model="data.city"
        @keyup.enter="getWeather"
        placeholder="enter a city"
          type="text"
          >
  </div>
  <div 
    v-if="data.weather" 
    class="weather"
  >
    <h1>{{ Math.round(data.weather.main.temp) }}&deg;</h1>
    <h2>{{ data.weather.weather[0].main }}</h2>
    <h3>{{data.weather.weather[0].description }}</h3>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
  export default {
  
    setup() {
      let data = reactive({ 
      city: "",
      weather: null,
    })

     const apiUrl = "http://localhost:3000/";
     // move key to server
     // const apiKey = "8c4d06d790b4841adca1e53efc47e969" 
  
    const getWeather = () => {
     // axios("https://api.openweathermap.org/data/2.5/weather?units=imperial&q=austin&appid=8c4d06d790b4841adca1e53efc47e969").then(response => {
     // axios(`${ apiUrl }?units=imperial&q=${ data.city }&appid=${ apiKey }`).then(response => {
      axios(`${ apiUrl }?units=imperial&q=${ data.city }`).then(response => {
        data.weather = response.data
      //   console.log(data.weather)
      })
    }
      //console.log("getWeather")
    
    return { 
    data, 
    getWeather 
    }
  }
}
</script>
