const { Schema, model } = require('mongoose');

const genreSchema = new Schema(
    {
    genre: {
        type: String,
        required: true,
    },
    artists: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Artists'
        }
    ]
});

const Genre = model('Genre', genreSchema);

module.exports = Genre;
