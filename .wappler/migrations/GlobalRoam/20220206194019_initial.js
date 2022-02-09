
exports.up = function(knex) {
  return knex.schema
    .createTable('test1', function (table) {
      table.increments('id');
      table.string('test_field');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('test1')
};
