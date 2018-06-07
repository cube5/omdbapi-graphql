import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema";

require("dotenv").config();

const PORT = process.env.PORT || 4000;
const server = express();

server.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "graphql"
  })
);

server.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

server.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`);
});
