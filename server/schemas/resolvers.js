const { Artists, Genre, Users } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      artistsByGenre: async (_, { genreId }) => {
        try {
          const artistsByGenre = await Genre.findOne({ genreId }).populate('artists');
          return artistsByGenre?.artists || [];
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
      allGenres: async () => {
        try{
          const allGenres = await Genre.find();
          return allGenres;
        }
        catch (error) {
          console.error(error);
          throw error;
        }
      },
      artistById: async (_, { artistId }) => {
        try {
          const artist = await Artists.findById(artistId);
          return artist;
        } catch (error) {
          console.error(error);
          throw error;
        }
      },
        me: async (parent, args, context) => {
            if (context.user) {
              return Users.findOne({ _id: context.user._id }).select('-__v -password');
            }
            throw new AuthenticationError('You must be logged in');
          },
      },
    
      Mutation: {
        addUser: async (parent, { email, password }) => {
          const user = await Users.create({ email, password });
          const token = signToken(user);
          return { token, user };
        },
        login: async (parent, { email, password }) => {
          const user = await Users.findOne({ email });
    
          if (!user) {
            throw AuthenticationError;
          }
    
          const correctPw = await user.isCorrectPassword(password);
    
          if (!correctPw) {
            throw AuthenticationError;
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
      },
};

module.exports = resolvers;
