const express = require('express');
const path = require('path')
const parser = require('body-parser')
//pulls in mongoose.js which connects to our database and also links all of our models
require('./server/config/mongoose.js');


const app = express();
app.use(parser.json())
    .use(parser.urlencoded({ extended: true }));

app.use(express.static( __dirname + '/public/dist/public' ));


//pulls in all of our routes
require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("Go MEAN project! listening on 8000!"));
