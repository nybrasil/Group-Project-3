const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/loginDB';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB connected...');
});

module.exports = db;
