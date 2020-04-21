const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a8a08ce978ef28da1a5bc8690c93bbe7&query=' + latitude + ',' + longitude + '&units=m'

    request({url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback(body.error.info, undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0]
                + ', the temperature is: '
                + body.current.temperature
                + ' but it feels like : '
                + body.current.feelslike)
        }
    })
}

module.exports = forecast