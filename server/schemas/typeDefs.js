const typeDefs = `
type Users {
    _id: ID
    username: String!
    email: String!
    password: String!
  }
  type Artist {
    _id: ID
    name: String!
    description: String!
    city: String!
    state: String!
    images: [String]!
    website: String!
    email: String!
    genre: [String]!
  }
  type Genre {
    _id: ID
    genre: String!
    artists: [String]!
  }
  type Auth {
    token: ID!
    user: Users
  }
  type Query {
    genres: [Genre]
    artist: Artist
    me: Users
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
