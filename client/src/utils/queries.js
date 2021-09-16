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
        pokemon {
          _id
          name
          description
          gif
        }
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
        pokemon {
          _id
          name
          description
          gif
          level
        }
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
        name
        description
        level
        gif
      }
    }
  }
`;

export const QUERY_SINGLE_ADOPTION = gql`
  query getSingleAdoption($adoptionId: ID!) {
    adoption(adoptionId: $adoptionId) {
      _id
      name
      description
      createdAt
      pokemon {
        _id
        name
        description
        gif
        level
      }
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_POKEMONS = gql`
  query pokemons {
    pokemons {
      _id
      name
    }
  }
`;