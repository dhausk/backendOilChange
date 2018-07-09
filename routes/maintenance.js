const knex = require('../knexfile')

const router = module.exports = require('express').Router();

router.get('/', getAll)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)
router.error('/', error)

function getAll(req, res, next) {
  knex('maintenance')
    .select('*')
    .then(maintenance => res.status(200).send({ data: maintenance }))
    .catch(next)
}
function validLog(maintenance) {
  const hasVehicle = typeof maintenance.vehicle_id == 'number';
  const hasMaintenance = typeof maintenance.maintenance == 'string' && maintenance.maintenance.trim() != "";
  const hasDate = typeof maintenance.date == 'string' && maintenance.date.trim() != "";;
  const hasNotes = typeof maintenance.notes == 'string' && maintenance.notes.trim() != "";
  const hasCost = typeof maintenance.cost == 'number';

  return hasVehicle && hasMaintenance && hasDate && hasNotes && hasCost
}

function create(req, res, next) {
  if (validLog(maintenance)) {

  }
  knex('maintenance')
    .insert(req.body)
    .then(() => res.status(201).json({ data: req.body }))
    .catch(next)
}

function update(req, res, next) {
  knex('maintenance')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => count >= 1
      ? res.status(200).json({ data: req.body })
      : res.status(410).json())
    .catch(next)
}

function remove(req, res, next) {

  knex('maintenance').where({ id: req.params.id })
    .delete()
    .then(count => count >= 1
      ? res.status(204).json({ message: "log deleted" })
      : res.status(404).json({ message: 'Nothing deleted!' }))
    .catch(next)
}
function error(req, res, next) {
  knex('maintenance')
    .then(maintenance => res.status(404).send({ data: "bad request" }))
    .catch(next)
}