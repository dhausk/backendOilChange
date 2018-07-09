exports.seed = function (knex, Promise) {
  return knex('vehicles')
    .del()
    .then(() => knex('vehicles').insert(data))
    .then(() => knex.raw(`ALTER SEQUENCE vehicles RESTART WITH ${data.length + 1};`))
}
const data = [
  {
    "id": 1,
    "make": "Toyota",
    "model": "Corolla",
    "yr": 1994,
    "name": "rolldozer"
  },
  {
    "id": 2,
    "make": "Chevy",
    "model": "20 van",
    "yr": 1989,
    "name": "The Beast"
  },
  {
    "id": 3,
    "make": "Honda",
    "model": "Civic",
    "yr": 1998,
    "name": "speedy"
  }
]