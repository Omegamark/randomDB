
exports.up = function(knex, Promise) {
  return knex.schema.createTable('new', function(table) {
    table.increments();
    table.string('name');
    table.text('desc')
    table.date('release_date');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('new');
};
