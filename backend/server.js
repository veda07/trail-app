const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const cors           = require('cors');


require('./db/db');



const corsOptions = {
  origin: 'http://localhost:3000', // when you deploy your react app this is where you put the address
  optionsSuccessStatus: 200 // some legacy browsers, and options 
}
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
  res.send('trails-app');
})


// Require the controller after the middleware
const trailsController = require('./controllers/trailController');
app.use('/api/v1/trails', trailsController)


app.listen(process.env.PORT || 9000, () => {
  console.log('listening on port 9000');
});
