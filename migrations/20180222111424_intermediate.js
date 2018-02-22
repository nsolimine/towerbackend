exports.up = function(knex, Promise) {
  return knex.schema.createTable('intermediate', table => {
    table.increments('intermediateId').primary();
    table.text('intermediateDifficulty');
    table.text('intermediateArtist');
    table.text('intermediateSong');
    table.string('intermediateTechnique');
    table.string('intermediateUrl');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('intermediate')
};
