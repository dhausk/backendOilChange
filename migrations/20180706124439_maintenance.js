exports.up = function (knex, Promise) {
  return knex.schema.createTable('maintenance', function (table) {
    table.increments('id');
    table.integer('vehicle_id');
    table.text('maintenance');
    table.date('date');
    table.text('notes');
    table.float('cost');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('maintenance');
};
