const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('vehicles');
  },
  create(vehicles) {
    return knex('vehicles').insert(vehicles, '*');
  },
  update(id, vehicles) {
    return knex('vehicles').where('id', id).update(vehicles, '*');
  },
  delete(id) {
    return knex('vehicles').where('id', id).del()
  }
}