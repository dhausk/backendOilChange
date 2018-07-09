exports.seed = function (knex, Promise) {
  return knex('vehicles')
    .del()
    .then(() => knex('vehicles').insert(data))
    .then(() => knex.raw(`ALTER SEQUENCE vehicles_id_seq RESTART WITH ${data.length + 1};`))
}

const data = [
  {
    "id": 1,
    "make": "Toyota",
    "model": "Corrola",
    "year": 1994,
    "note": "4 door sedan, 3 speed AT "
  },
  {
    "id": 2,
    "make": "Toyota",
    "model": "Tacoma",
    "year": 2001,
    "note": "crew cab, manual 5 speed "
  },
  {
    "id": 3,
    "make": "Ford",
    "model": "F-150",
    "year": 2010,
    "note": "crew cab, towing package "
  }
]