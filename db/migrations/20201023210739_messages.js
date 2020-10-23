exports.up = function(knex) {
  return knex.schema.createTable('messages', (table) => {
    table.increments('id').primary()
    table.text('body').notNullable()
    table.timestamp('created_at').defaultTo(knex.fn.now())
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('messages')
};
