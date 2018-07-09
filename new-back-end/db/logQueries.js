const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('log');
  },
  create(log) {
    return knex('log').insert(log, '*');
  },
  update(id, log) {
    return knex('log').where('id', id).update(log, '*');
  },
  delete(id) {
    return knex('log').where('id', id).del()
  }
}