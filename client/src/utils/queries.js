import { gql } from '@apollo/client';

export const QUERY_GENRES_ARTISTS = gql`
query GenresWithArtists {
    genresWithArtists {
      _id
      artists {
        name
      }
      genre
      genreId
    }
  }
  `;
  export const QUERY_ARTISTS_BY_GENRE = gql`
  query ArtistsByGenre($genreId: String!) {
    artistsByGenre(genreId: $genreId) {
      _id
      name
      genre
      images
    }
  }
`;

  export const QUERY_ALL_GENRES = gql`
  query AllGenres {
    allGenres {
      _id
      genre
      genreId
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