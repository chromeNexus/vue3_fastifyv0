require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
var qs = require('qs');
const axios = require('axios')


const apiUrl = "https://api.openweathermap.org/data/2.5/weather";
const weatherAPPapiKey = process.env.weatherAPPapiKey;

app.get('/', (request, response) => {
    response.set("Access-Control-Allow-Origin", "*")
    // https://api.openweathermap.org/data/2.5/weather?units=imperial&q=austin&appid=8c4d06d790b4841adca1e53efc47e969").then(response => {

    let query = request.query
    query.appid= weatherAPPapiKey
    let queryString = qs.stringify(query)
    // console.log(request.query)
     console.log(queryString)
    axios(`${ apiUrl }?${ queryString }`).then(res => {
      //  console.log(response)
       // response = data sent back to client... res.data = data response from apiopen weather
       response.send(res.data)
    })
  //response.send('Hello World!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


