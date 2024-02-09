const { Artists, Genre, Users } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      genresWithArtists: async () => {
        try {
          const genresWithArtists = await Genre.find().populate('artists');
          return genresWithArtists;
        } catch (error) {
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
          console.log(user)
          if (!user) {
            throw AuthenticationError;
          }
          
          const correctPw = await user.isCorrectPassword(password);
          console.log(correctPw)
          if (!correctPw) {
            throw AuthenticationError;
          }
    
          const token = signToken(user);
    
          return { token, user };
        },
      },
};

module.exports = resolvers;
