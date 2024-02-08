const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
// const artistSchema = require('./Artists')

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  // savedArtists: [artistSchema],
},
{
  // toJSON: {
  //   virtuals: true,
  // },
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// userSchema.virtual('artistCount').get(function () {
//     return this.savedArtists.length;
//   });

const Users = model('User', userSchema);

module.exports = Users;

