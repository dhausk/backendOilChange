const knex = require('../knex')
const router = module.exports = require('express').Router();

router.get('/', getAll)
router.get('/:id', getOne)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

// TODO: Don't forget data validation/restrictions:
// - use regex, mongoose, Joi, bookshelf, *schema lib, etc. many options: choose one


function getAll(req, res, next) {

  knex('vehicles')
    .select('*')
    .then(vehicles => res.status(200).send({ data: "vehicles" }))
    .catch(next)
}

function getOne(req, res, next) {
  knex('vehicles')
    .select('*')
    .where({ id: req.params.id })
    .then(([item]) => {
      if (!item) return res.status(404).send({ message: 'Item not found.' })
      res.status(200).send({ data: item })
    })
    .catch(next)
}

function create(req, res, next) {
  // TODO: Validate input data
  knex('vehicles')
    .insert(req.body)
    .then(() => res.status(201).json({ data: req.body }))
    .catch(next)
}

function update(req, res, next) {
  // TODO: Validate input data
  knex('vehicles')
    .where({ id: req.params.id })
    .update(req.body)
    .then(count => count >= 1
      ? res.status(200).json({ data: req.body })
      : res.status(410).json())
    .catch(next)
}

function remove(req, res, next) {
  knex('vehicles').where({ id: req.params.id })
    .delete()
    .then(count => count >= 1
      ? res.status(204).json({ message: 'vehicle deleted' })
      : res.status(404).json({ message: 'Nothing deleted!' }))
    .catch(next)
}
