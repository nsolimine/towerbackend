exports.up = function(knex, Promise) {
  return knex.schema.createTable('expert', table => {
    table.increments('id').primary();
    table.text('difficulty');
    table.text('artist');
    table.text('song');
    table.string('technique');
    table.string('url');
    table.string('tabUrl');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('expert')
};
