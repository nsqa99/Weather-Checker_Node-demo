const fetch = require('node-fetch');

module.exports.getWeather = (req, res) => {
    const city = req.query.city;
    const err = 'Sorry, we can\'t find your city';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&units=metric`
    fetch(url)
     .then((response) => response.json())
     .then(json =>  {
        if (!json.message) {
            const weather = json.weather[0].main.toUpperCase();
            const description = json.weather[0].description.toUpperCase();
            const temparature = json.main.temp + ' *C';
            const windSpeed = json.wind.speed + ' m/s';
            const visibility = json.visibility + ' m';
            const city = json.name.toUpperCase();
            const imgSrc = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
           
            res.render('../views/home/index', 
            { 
                imgSrc: imgSrc,
                city: city,
                description: description,
                temp: temparature,
                windSpeed: windSpeed,
                visibility: visibility
            })
        } else {
            res.render('../views/home/index', {
                err: err,
                errCity: city
            })
        }
     })
    
    //res.send(json.weather[0].main)
     .catch(e => console.log(e));
}