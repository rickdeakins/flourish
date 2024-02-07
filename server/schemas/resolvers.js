const { Artists, Genre, Users } = require('../models');

const resolvers = {
    Query: {
        genres: async (parent, { genre }) => {
            return Genre.find(genre).sort({ createdAt: -1 });
          },
        artist: async (parent, { artist }) => {
            return Artists.findOne({ _id: context.artist._id }).sort({ createdAt: -1 });
          },
        me: async (parent, args, context) => {
          if (context.user) {
            return Users.findOne({ _id: context.user._id }).select('-__v -password');
          }
          throw AuthenticationError;
        },
      },
    
      Mutation: {
        addUser: async (parent, { username, email, password }) => {
          const user = await Users.create({ username, email, password });
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
