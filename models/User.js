const { Schema, model } = require('mongoose');

const donationSchema = new Schema({
    amount: {
        type: Number,
        required: true,
    },
    transactionDate: {
        type: Date,
        default: Date.now
    },

})

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  donations: [ donationSchema ]
    
  
})

const User = model('User', userSchema);

module.exports = User;
