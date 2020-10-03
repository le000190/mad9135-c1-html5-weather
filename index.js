import { getForecast, createWeatherIcon } from './weather.service.js'
import { getGeolocation } from './map.service.js'

main()

// This is a demo of how to use the two API services.
// You should replace this with your own application logic.

async function main () {
  const location = 'Algonquin College, Nepean, ON, CA'

  document
    .getElementById('subButton')
    .addEventListener('click', async function () {
      console.log('button')
      let inputCity = document.getElementById('inputCity')

      try {
        console.log(inputCity.value)
        const coord = await getGeolocation(inputCity.value)
        const forecast = await getForecast({ coord })
        console.log(coord)
        console.log(forecast)
      } catch (error) {
        console.log(error.message)
      }
    })
  try {
    const coord = await getGeolocation(location)
    const forecast = await getForecast({ coord })
    console.log(forecast)
  } catch (error) {
    console.log(error.message)
  }
}
// document.addEventListener('DOMContentLoaded', init)
//     getLocation: () => {
//         navigator.geolocation.getCurrentPosition(
//           function success (pos) {
//             app.currentLocation = pos.coords
//             console.log(app.currentLocation)
//           },
//           function error (err) {
//             console.warn(ERROR: ${err}, ${err.message})
//           },
//           {
//             enableHighAccuracy: true,
//             timeout: 5000
//           }
//         )
//         app.main()
