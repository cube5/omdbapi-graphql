import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
  type Query {
    movie(imdbID: ID, plot: String): Movie
  }

  type Movie {
    Title: String!
    Year: String
    Rated: String
    Released: String
    Runtime: String
    Genre: String
    Director: String
    Writer: String
    Actors: String
    Plot: String
    Language: String
    Country: String
    Awards: String
    Poster: String!
    Ratings: [Rating!]
    Metascore: String
    imdbRating: String
    imdbVotes: String
    imdbID: ID!
    Type: String
    DVD: String
    BoxOffice: String
    Production: String
    Website: String
    Response: String
  }

  type Rating {
    Source: String!
    Value: String!
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
