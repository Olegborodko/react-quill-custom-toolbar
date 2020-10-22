exports.up = function(knex) {
  return knex.schema.createTable('tokens', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.string('tag').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.unique('tag')
    table.unique('title')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tokens')
};
