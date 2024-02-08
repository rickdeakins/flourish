import { gql } from '@apollo/client';

export const QUERY_GENRES_ARTISTS = gql`
query GenresWithArtists {
    genresWithArtists {
      _id
      artists {
        name
      }
      genre
    }
  }
  `;

  export const QUERY_SINGLE_ARTIST = gql`
  query GetArtistById($artistId: ID!) {
    artistById(artistId: $artistId) {
        name
        description
        city
        state
        images
        website
        email
        genre
        genreId
    }
  }
`;

const GET_ME = gql`
  query GetMe {
    me {
      _id
      email
      password
    }
  }
`;