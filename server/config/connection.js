const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://agrastp:glasses@cluster0.hq8msmy.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/Flourish');
module.exports = mongoose.connection;
