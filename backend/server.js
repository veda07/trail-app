const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');



require('./db/db');

const port = 9000


// SET UP CORS AS MIDDLEWARE, SO any client can make a request to our server
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.send('trails-app');
})


// Require the controller after the middleware
const trailsController = require('./controllers/trailController');
app.use('/api/v1/trails', trailsController)


app.listen(port, () => {
  console.log('up and running');
});
