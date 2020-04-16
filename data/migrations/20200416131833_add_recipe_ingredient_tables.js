exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments();
      tbl.string("name", 125).notNullable();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments();
      tbl.string("description", 125).notNullable();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients");
      tbl.float("amount").notNullable();
    })
    .createTable("recipe_steps", (tbl) => {
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes");
      tbl.integer("number").notNullable();
      tbl.primary(["recipe_id", "number"]);

      tbl.string("description").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
