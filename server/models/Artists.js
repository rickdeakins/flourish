const { Schema, model } = require('mongoose');

const artistSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        images: [{
            type: String,
            required: true,
        }],
        website: {
            type: String,
        },
        email: {
            type: String,
            required: true
        },
        genre: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Genre'
            }
        ]
    });

const Artists = model('Artists', artistSchema);

module.exports = Artists;
