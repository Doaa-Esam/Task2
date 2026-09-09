
const readline = require("readline")

const forecast = require("./data1/forecast")
const geocode = require("./data1/geocode")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter country name: ", (country) => {

    geocode(country, (error, data) => {

        if (error) {
            console.log("ERROR : " + error)
            rl.close()
        } else {

            forecast(data.latitude, data.longitude, (error, weatherData) => {

                if (error) {
                    console.log("ERROR : " + error)
                    rl.close()
                } else {

                    console.log("\nCountry : " + weatherData.country)
                    console.log("Location : " + weatherData.name)
                    console.log("Temperature : " + weatherData.temperature + " °C")
                    console.log("Latitude : " + data.latitude)
                    console.log("Longitude : " + data.longitude)

                    rl.close()
                }
            })
        }
    })
})