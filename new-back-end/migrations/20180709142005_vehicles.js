exports.up = function (knex, Promise) {
  return knex.schema.createTable('vehicles', function (table) {
    table.increments('id');
    table.string('make');
    table.string('model');
    table.string('year');
    table.string('note');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('vehicles');
};