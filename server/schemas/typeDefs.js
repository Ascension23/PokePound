const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    adoptions: [Adoption]!
  }

  type Adoption {
    _id: ID
    name: String
    description: String
    pokemon: Pokemon
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }
  
  type Pokemon {
    _id: ID
    id: Int
    name: String
    type1: String
    type2: String
    level: Int
    attack: Int
    defense: Int
    seed: Int
    special: Int
    gif: String
    png: String
    description: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User

    adoptions: [Adoption]
    adoption(adoptionId: ID!): Adoption

    pokemons: [Pokemon]
    pokemon(pokemonId: ID!): Pokemon

    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addAdoption(name: String!, description: String!, pokemon: String!): Adoption

    addComment(adoptionId: ID!, commentText: String!): Adoption

    removeAdoption(adoptionId: ID!): Adoption

  }
`;

module.exports = typeDefs;
