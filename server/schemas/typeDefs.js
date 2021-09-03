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
    level: Int
    attack: Int
    defense: Int
    description: String
    pokemon: Pokemon
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
    adoption(id: ID!): Adoption

    pokemons: [Pokemon]
    pokemon(id: ID!): Pokemon

    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    addAdoption(name: String!, description: String!): Adoption
  }
`;

module.exports = typeDefs;
