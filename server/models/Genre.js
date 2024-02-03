const { Schema, model } = require('mongoose');

const genreSchema = new Schema({
  
 
});

const Genre = model('Genre', genreSchema);

module.exports = Genre;
