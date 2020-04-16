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

function getShoppingList(recipe_id) {
  return db("recipe_ingredients as ri")
    .where({ recipe_id })
    .join("ingredients as i", { "i.id": "ri.ingredient_id" })
    .select("ri.id", "ri.amount as amount", "i.description");
}

function getInstructions(recipe_id) {
  return db("recipe_steps")
    .where({ recipe_id })
    .select("number", "description")
    .orderBy("number");
}
