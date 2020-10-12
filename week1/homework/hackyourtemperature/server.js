const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const axios = require('axios');

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/weather', function(req, res) {
    let cityName = req.body.cityName;
    const apiKey = require('./sources/keys.json').key;
    const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(endpoint)
      .then(function (response) {
        res.render('index', {weatherText: `It's ${Math.round(response.data.main.temp)} celsius degree now in ${cityName}`});
      })
      .catch(function (error) {
        res.render('index', { weatherText: "City is not found!" });
      });
});

app.listen(3000);