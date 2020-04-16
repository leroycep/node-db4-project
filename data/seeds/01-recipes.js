exports.seed = function (knex) {
  return knex("recipes").insert([
    { id: 1, name: "Oatmeal" },
    { id: 2, name: "Slow Cooker Chicken Curry" },
    { id: 3, name: "Milk Bread" },
  ]);
};
