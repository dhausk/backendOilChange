const knex = require('../knexfile')
const router = module.exports = require('express').Router();

router.get('/', getAll)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)
router.error('/', error)

function getAll(req, res, next) {
  knex('vehicles')
    .select('*')
    .then(vehicles => res.status(200).send({ data: vehicles }))
    .catch(next)
}

function validVehicle(vehicle) {
  const hasMake = typeof vehicle.make == 'string' && vehicle.make.trim() != ""
  const hasModel = typeof vehicle.model == 'string' && vehicle.model.trim() != ""
  const hasYr = typeof vehicle.yr == 'number'
  const hasName = typeof vehicle.name == 'string' && vehicle.name.trim() != ""

  return hasMake && hasModel && hasYr && hasName
}

function create(req, res, next) {
  if (validVehicle(req.body)) {
    queries.update(req.params.id, req.body).then(vehicles => {
      res.status(201).json({ data: vehicles[0] })
    })
  } else {
    next(new Error('invalid Vehicle'))
  }
}

function update(req, res, next) {
  // TODO: Validate input data
  knex('vehicles')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => count >= 1
      ? res.status(200).json({ data: req.body })
      : res.status(410).json({ data: { message: 'did not update' } }))
    .catch(next)
}

function remove(req, res, next) {
  knex('vehicles').where({ id: req.params.id })
    .delete()
    .then(count => count >= 1
      ? res.status(204).json({ data: { message: 'vehicle deleted' } })
      : res.status(404).json({ data: { message: 'Nothing deleted!' } }))
    .catch(next)
}

function error(req, res, next) {
  knex('maintenance')
    .then(maintenance => res.status(404).send({ data: "bad request" }))
    .catch(next)
}