const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: false }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/weather', function(req, res) {
    let cityName = req.body.cityName;
    console.log(cityName);
    res.end(cityName);
});

app.listen(3000);