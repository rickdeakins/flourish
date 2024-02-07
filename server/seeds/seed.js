const db = require('../config/connection');
const { Artists, Users, Genre } = require("../models");
const userSeeds = require("./userSeeds.json");
const artistSeeds = require("./artistSeeds.json");
const genreSeeds = require("./genreSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("Artists", "artists");
    await cleanDB("Genres", "genres");
    await cleanDB("Users", "users");

    await Artists.create(artistSeeds);
    await Genre.create(genreSeeds);
    await Users.create(userSeeds);

    for (let i = 0; i < userSeeds.length; i++) {
      const { _id, userAuthor } = await Users.create(userSeeds[i]);
      const user = await Users.findOneAndUpdate(
        { username: userAuthor },
        {
          $addToSet: {users: _id,},
        }
      );
    }

    for (let i = 0; i < artistSeeds.length; i++) {
      await Artists.create(artistSeeds[i]);
    }

    for (let i = 0; i < genreSeeds.length; i++) {
      await Genre.create(genreSeeds[i]);
    }

    console.log("all done!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});