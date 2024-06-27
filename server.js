const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection'); 

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.model('User', userSchema);

const startApolloServer = async () => {
  await server.start();
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.use('/graphql', expressMiddleware(server));

  
  app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const newUser = new User({
      username,
      password
    });

    newUser.save()
      .then(user => res.send('User registered successfully'))
      .catch(err => res.status(400).send('Error: ' + err));
  });

  
  app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    User.findOne({ username })
      .then(user => {
        if (!user) {
          return res.status(400).send('User not found');
        }

        if (user.password === password) {
          res.send('Login successful');
        } else {
          res.status(400).send('Invalid credentials');
        }
      })
      .catch(err => res.status(400).send('Error: ' + err));
  });

  // if we're in production, serve client/dist as static assets
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  } 

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

startApolloServer();
