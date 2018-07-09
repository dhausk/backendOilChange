exports.seed = function (knex, Promise) {
  return knex('log')
    .del()
    .then(() => knex('log').insert(data))
    .then(() => knex.raw(`ALTER SEQUENCE log_id_seq RESTART WITH ${data.length + 1};`))
}

const data = [
  {
    "id": 1,
    "veh_id": 1,
    "maintenance": "Oil Change",
    "cost": 20.00,
    "note": " all good "
  },
  {
    "id": 2,
    "veh_id": 1,
    "maintenance": "Oil Change",
    "cost": 20.30,
    "note": "change trans fluid "
  },
  {
    "id": 3,
    "veh_id": 3,
    "maintenance": "Oil Change",
    "cost": 20.40,
    "note": "all good"
  },
  {
    "id": 4,
    "veh_id": 3,
    "maintenance": "Oil Change and filter change",
    "cost": 25.40,
    "note": "all good"
  },
  {
    "id": 5,
    "veh_id": 3,
    "maintenance": "Oil Change and filter change",
    "cost": 25.40,
    "note": "all good"
  },
  {
    "id": 6,
    "veh_id": 2,
    "maintenance": "Oil Change and filter change",
    "cost": 15.40,
    "note": "all good"
  },
  {
    "id": 7,
    "veh_id": 2,
    "maintenance": "Oil Change and filter change",
    "cost": 26.40,
    "note": "all good"
  }
]