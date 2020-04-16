const cleaner = require("knex-cleaner");

exports.seed = function (knex) {
  return knex("recipe_steps")
    .truncate()
    .then(() => {
      return knex("recipe_ingredients").truncate();
    })
    .then(() => {
      return knex("ingredients").truncate();
    })
    .then(() => {
      return knex("recipes").truncate();
    });
};
