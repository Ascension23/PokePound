import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_ADOPTION = gql`
  mutation addAdoption($name: String!, $description: String!, $pokemon: String!) {
    addAdoption(name: $name, description: $description, pokemon: $pokemon,) {
      _id
      name
      description
      pokemon {
        _id
      }
    }
  }
`;
