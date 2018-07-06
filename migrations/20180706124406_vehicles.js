exports.up = function (knex, Promise) {
  return knex.schema.createTable('vehicles', function (table) {
    table.increments('id');
    table.string('make', 60);
    table.string('model', 80);
    table.integer('yr');
    table.string('name');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('vehicles');
};