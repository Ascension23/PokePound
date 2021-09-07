import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      adoptions {
        _id
        name
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      adoptions {
        _id
        name
        description
        createdAt
      }
    }
  }
`;

export const QUERY_ADOPTIONS = gql`
  query adoptions {
    adoptions {
      _id
      name
      description
      createdAt
      pokemon {
        _id
      }
    }
  }
`;
