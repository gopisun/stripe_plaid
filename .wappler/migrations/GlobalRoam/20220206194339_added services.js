
exports.up = function(knex) {
  return knex.schema
    .createTable('services', function (table) {
      table.integer('id');
      table.string('grp_id');
      table.string('call_type');
      table.string('dest_grp');
      table.string('svc_name');
      table.timestamp('created_at');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('services')
};
