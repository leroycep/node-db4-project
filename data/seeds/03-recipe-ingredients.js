exports.seed = function (knex) {
  return knex("recipe_ingredients").insert([
    // Oatmeal
    { recipe_id: 1, ingredient_id: 1, amount: 1 },
    { recipe_id: 1, ingredient_id: 4, amount: 1 },
    { recipe_id: 1, ingredient_id: 3, amount: 1 },
    { recipe_id: 1, ingredient_id: 2, amount: 0.125 },

    // Milk Bread
    { recipe_id: 3, ingredient_id: 4, amount: 1.125 },
    { recipe_id: 3, ingredient_id: 16, amount: 1 },
    { recipe_id: 3, ingredient_id: 13, amount: 3 },
    { recipe_id: 3, ingredient_id: 15, amount: 1 },
    { recipe_id: 3, ingredient_id: 17, amount: 1 },
    { recipe_id: 3, ingredient_id: 2, amount: 1.5 },
    { recipe_id: 3, ingredient_id: 14, amount: 2 },
  ]);
};
