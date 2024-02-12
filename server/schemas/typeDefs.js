const typeDefs = `
  type User {
    _id: ID!
    email: String!
    password: String!
  }
  
  type Artist {
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
    artists: [Artist]
  }
  
  type Auth {
    token: ID!
    user: User
  }
  
  type Query {
    artistsByGenre(genreId: String!): [Artist]
    allGenres: [Genre]
    artistById(artistId: ID!): Artist
    me: User
  }
  
  type Mutation {
    addUser(email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
