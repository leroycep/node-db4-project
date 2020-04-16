const knex = require("knex");

const knexfile = require("../knexfile.js");
const db = knex(knexfile.development);

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
};

function getRecipes() {
  return db("recipes").select();
}

function getShoppingList() {}

function getInstructions() {}
