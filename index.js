const express = require("express");

const model = require("./data/model.js");
const PORT = process.env.PORT || 8561;

const server = express();

server.use(express.json());

server.get("/api/recipes", (req, res) => {
  model
    .getRecipes()
    .then((recipes) => {
      res.status(200).json(recipes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Could not retrieve recipe data" });
    });
});

server.listen(PORT, () =>
  console.log(` == server listening on port ${PORT} == `)
);
