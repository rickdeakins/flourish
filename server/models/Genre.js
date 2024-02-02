const { Schema, model } = require('mongoose');

const genreSchema = new Schema({
  
 
});

const Tech = model('Genre', genreSchema);

module.exports = Genre;
