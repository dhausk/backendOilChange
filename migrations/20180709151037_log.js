exports.up = function (knex, Promise) {
  return knex.schema.createTable('log', function (table) {
    table.increments('id');
    table.integer('veh_id');
    table.string('maintenance');
    table.float('cost');
    table.string('date');
    table.string('note');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('log');
};