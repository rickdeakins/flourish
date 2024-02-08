const mongoose = require('mongoose');
const db = require('../config/connection');
const { Artists, Users, Genre } = require('../models');
const userSeeds = require('./userSeeds.json');
const artistSeeds = require('./artistSeeds.json');
const genreSeeds = require('./genreSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB('Artists', 'artists');
    await cleanDB('Genre', 'genre');
    await cleanDB('Users', 'users');

    const createdArtists = await Artists.create(artistSeeds);
    const createdGenres = await Genre.create(genreSeeds);
    const createdUsers = await Users.create(userSeeds);
    console.log('Created Genres:', createdGenres.map(genre => ({ _id: genre._id, genreId: genre.genreId })));

    for (const newArtist of createdArtists) {
      const artistId = newArtist._id;
    
      // Check if the artist has a specified genreId
      if (newArtist.genreId && createdGenres.some(genre => genre.genreId === newArtist.genreId)) {
        // Get the corresponding genre based on the genreId and populate the 'artists' field
        const assignedGenre = await Genre.findOne({ genreId: newArtist.genreId }).populate('artists');
    
        // Check if the assignedGenre is found
        if (assignedGenre) {
          // Push artistId into the genre's artists array
          assignedGenre.artists.push(artistId);
    
          // Save the updated genre
          await assignedGenre.save();
    
          console.log(`Artist ${artistId} associated with Genre ${assignedGenre.genreId}`);
        } else {
          console.log(`Genre for Artist ${artistId} (${newArtist.genreId}) not found`);
        }
      } else {
        console.log(`Artist ${artistId} does not have a valid assigned genreId`);
      }
    }
    
    console.log('all done!');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});