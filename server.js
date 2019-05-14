const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');


require('./db/db');

const port = 9000


// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:3000', 
  credentials: true, 
  optionsSuccessStatus: 200 
}

app.use(cors(corsOptions));



// Require the controller after the middleware
const trailsController = require('./controllers/movieController');




app.listen(port, () => {
  console.log('up and running');
});
