exports.up = function(knex, Promise) {
  return knex.schema.createTable('intermediate', table => {
    table.increments('id').primary();
    table.text('difficulty');
    table.text('artist');
    table.text('song');
    table.string('technique');
    table.string('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('intermediate')
};
