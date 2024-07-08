const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://rosstauchert:Xadrez1982!!@cluster0.x4cmtvh.mongodb.net/projectdb?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
