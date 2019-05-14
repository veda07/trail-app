// This is where we will set up our db connection
const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost/trails', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose is disconnected')
});
