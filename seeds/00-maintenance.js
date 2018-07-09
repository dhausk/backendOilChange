exports.seed = function (knex, Promise) {
  return knex('maintenance')
    .del()
    .then(() => knex('maintenance').insert(data))
    .then(() => knex.raw(`ALTER SEQUENCE maintenance RESTART WITH ${data.length + 1};`))
}
const data = [
  {
    "id": 1,
    "vehicle_id": 1,
    "maintenance": "Oil Change",
    "date": "2-04-1997",
    "notes": "all good",
    "cost": 15.00
  },
  {
    "id": 2,
    "vehicle_id": 1,
    "maintenance": "Oil Change",
    "date": "3-04-1999",
    "notes": "all good",
    "cost": 15.00
  },
  {
    "id": 3,
    "vehicle_id": 3,
    "maintenance": "clutch fluid change",
    "date": "3-05-2001",
    "notes": "all good",
    "cost": 30.00
  },
  {
    "id": 4,
    "vehicle_id": 2,
    "maintenance": "coolant fluid change",
    "date": "3-05-2004",
    "notes": "all good",
    "cost": 40.00
  }
]
