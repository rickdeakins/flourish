const typeDefs = `
type Users {
    _id: ID!
    username: String!
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
    website: String!
    email: String!
    genre: String!
    genreId: String!
  }
  type Genre {
    _id: ID!
    genre: String!
    genreId: String!
  }
  
  type Auth {
    token: ID!
    user: Users
  }
  type Query {
    genres: [Genre]
    artists: Artists
    me: Users
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
