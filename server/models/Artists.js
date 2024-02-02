const { Schema, model } = require('mongoose');

const artistSchema = new Schema({
 
});

const Artists = model('Artists', artistSchema);

module.exports = Artists;
