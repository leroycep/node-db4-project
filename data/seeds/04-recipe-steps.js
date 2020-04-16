exports.seed = function (knex) {
  return knex("recipe_steps").insert([
    // Oatmeal
    {
      recipe_id: 1,
      number: 1,
      description:
        "Put all ingredients into the pot, bring to a boil then reduce heat to low",
    },
    {
      recipe_id: 1,
      number: 2,
      description:
        "Simmer for 3 to 5 minutes then remove from heat and let cool slightly",
    },
    { recipe_id: 1, number: 3, description: "Enjoy!" },

    // Slow cooker chicken curry
    {
      recipe_id: 2,
      number: 1,
      description: "Cut chicken in small pieces",
    },
    {
      recipe_id: 2,
      number: 2,
      description: "Finish cooking the f'in curry",
    },

    // Milk bread
    {
      recipe_id: 3,
      number: 1,
      description: "Put all the ingredients into the bread machine",
    },
    {
      recipe_id: 3,
      number: 2,
      description: "Set the bread machine to 1 1/2 lb loafs, basic cycle",
    },
    {
      recipe_id: 3,
      number: 3,
      description:
        "Once cycle is complete, take out loaf and let cool to room temperature",
    },
  ]);
};
