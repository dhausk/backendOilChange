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
    "date": '2018-02-12',
    "note": " all good "
  },
  {
    "id": 2,
    "veh_id": 1,
    "maintenance": "Oil Change",
    "cost": 20.30,
    "date": '2018-02-12',
    "note": "change trans fluid "
  },
  {
    "id": 3,
    "veh_id": 3,
    "maintenance": "Oil Change",
    "cost": 20.40,
    "date": '2018-03-12',
    "note": "all good"
  },
  {
    "id": 4,
    "veh_id": 3,
    "maintenance": "Oil Change and filter change",
    "cost": 25.40,
    "date": '2018-03-17',
    "note": "all good"
  },
  {
    "id": 5,
    "veh_id": 3,
    "maintenance": "Oil Change and filter change",
    "cost": 25.40,
    "date": '2017-10-25',
    "note": "all good"
  },
  {
    "id": 6,
    "veh_id": 2,
    "maintenance": "Oil Change and filter change",
    "cost": 15.40,
    "date": '2017-10-02',
    "note": "all good"
  },
  {
    "id": 7,
    "veh_id": 2,
    "maintenance": "Oil Change and filter change",
    "cost": 26.40,
    "date": '2017-11-11',
    "note": "all good"
  }
]