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
    createdAt: String
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
    adoptions: [Adoption]
  }

  type Thought {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
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


    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought

    addAdoption(name: String!, level: Int!, attack: Int!, defense: Int!, description: String!, pokemon: String!): Adoption

    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`;

module.exports = typeDefs;
