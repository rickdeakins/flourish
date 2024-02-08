const { Schema, model, default: mongoose } = require('mongoose');


const genreSchema = new Schema(
    {
    genre: {
        type: String,
        required: true,
    },
    genreId: { 
        type: String, 
        required: true, 
        unique: true 
    },
    artists: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Artists',
        },
      ],
    
});

const Genre = model('Genre', genreSchema);

module.exports = Genre;
