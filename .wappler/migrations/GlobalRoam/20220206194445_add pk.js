
exports.up = function(knex) {
  return knex.schema
    .table('services', function (table) {
      table.increments('kid');
    })
};

exports.down = function(knex) {
  return knex.schema
    .table('services', function (table) {
      table.dropColumn('kid');
    })
};
