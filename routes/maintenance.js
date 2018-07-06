// TODO: Import KNEX CONNECTION OBJECT
const knex = require('../db/knex') // TODO: Adjust path as needed!

// RESTFUL Knex Router Template:
const router = module.exports = require('express').Router();

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

// TODO: Don't forget data validation/restrictions:
// - use regex, mongoose, Joi, bookshelf, *schema lib, etc. many options: choose one

function getAll(req, res, next) {
  knex('maintenance')
    .select('*')
    .then(maintenance => res.status(200).send({ data: "maintenance" }))
    .catch(next)
}

function getOne(req, res, next) {
  knex('maintenance')
    .select('*')
    .where({ id: req.params.id })
    .then(([maintenance]) => {
      if (!maintenance) return res.status(404).send({ message: 'maintenance log not found.' })
      res.status(200).send({ data: maintenance })
    })
    .catch(next)
}

function create(req, res, next) {
  // TODO: Validate input data
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
