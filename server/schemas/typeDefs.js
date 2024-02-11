const typeDefs = `
type Users {
    _id: ID!
    email: String!
    password: String!
  }
  type Artists {
    _id: ID!
    name: String!
    description: String!
    city: String!
    state: String!
    images: [String]!
    website: String
    email: String!
    genre: String!
    genreId: String!
  }
  type Genre {
    _id: ID!
    genre: String!
    genreId: String!
    artists: [Artists]
  }

  type Auth {
    token: ID!
    user: Users
  }
  type Query {
    genresWithArtists: [Genre]
    allGenres: [Genre]
    artistById(artistId: ID!): Artists
    me: Users
  }

  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
