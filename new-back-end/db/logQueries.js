const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('logs');
  },
  create(logs) {
    return knex('logs').insert(logs, '*');
  },
  update(id, logs) {
    return knex('logs').where('id', id).update(logs, '*');
  },
  delete(id) {
    return knex('logs').where('id', id).del()
  }
}