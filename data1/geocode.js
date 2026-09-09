const request = require("request")

const geocode = (address, callback) => {

    const geocodeUrl = "https://nominatim.openstreetmap.org/search?q="
        + encodeURIComponent(address)
        + "&format=json&limit=1&featuretype=country"

    request({
        url: geocodeUrl,
        json: true,
        headers: {
            "User-Agent": "Task2-NodeJS"
        }
    }, (error, response) => {

        if (error) {
            callback("unable to connect geocode service", undefined)

        } else if (response.body.length == 0) {
            callback("Unable to find country", undefined)

        } else {

            callback(undefined, {
                longitude: response.body[0].lon,
                latitude: response.body[0].lat
            })
        }
    })
}

module.exports = geocode