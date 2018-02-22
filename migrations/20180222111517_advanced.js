exports.up = function(knex, Promise) {
  return knex.schema.createTable('advanced', table => {
    table.increments('advancedId').primary();
    table.text('advancedDifficulty');
    table.text('advancedArtist');
    table.text('advancedSong');
    table.string('advancedTechnique');
    table.string('advancedUrl');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('advanced')
};
