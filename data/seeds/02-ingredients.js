exports.seed = function (knex) {
  return knex("ingredients").insert([
    { id: 1, description: "cup of oatmeal" },
    { id: 2, description: "tsp. kosher salt" },
    { id: 3, description: "cup water" },
    { id: 4, description: "cup milk" },
    { id: 5, description: "g of chicken" },
    { id: 6, description: "onion" },
    { id: 7, description: "garlic clove" },
    { id: 8, description: "g chopped tomatoes" },
    { id: 9, description: "tsp. ground cumin" },
    { id: 10, description: "tbsp. garam masala" },
    { id: 11, description: "tbsp. paprika" },
    { id: 12, description: "ml coconut milk" },
    { id: 13, description: "cup bread flour" },
    { id: 14, description: "tsp. yeast" },
    { id: 15, description: "tbsp. sugar" },
    { id: 16, description: "tbsp. unsalted butter" },
    { id: 17, description: "tbsp. gluten" },
  ]);
};
