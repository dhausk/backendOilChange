const express = require('express');

const router = express.Router();

const queries = require('../db/vehicleQueries');

function validVehCard(vehCard) {
  const hasMake = typeof vehCard.make == 'string' && vehCard.make.trim() != "";
  const hasModel = typeof vehCard.model == 'string' && vehCard.model.trim() != "";
  const hasNote = typeof vehCard.note == 'string' && vehCard.note.trim() != "";
  const hasYear = typeof vehCard.year == 'string' && vehCard.year.trim() != "";
  return hasMake && hasModel && hasNote && hasYear;
}

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) {
    return next()
  } else {
    next(new Error('invalid id'))
  }
}

router.get('/', (req, res) => {
  queries.getAll().then(vehicles => {
    res.json(vehicles);
  })
})

router.post('/', (req, res, next) => {
  if (validVehCard(req.body)) {
    queries.create(req.body).then(veh_card => {
      res.json(veh_card[0])
    })
  } else {
    next(new Error('invalid vehicle'))
  }
})

router.put('/:id', isValidId, (req, res, next) => {
  if (validVehCard(req.body)) {
    queries.update(req.params.id, req.body).then(veh_card => {
      res.json(veh_card[0])
    })
  } else {
    next(new Error('invalid update'))
  }
})

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(res.json({ message: "successfully deleted!" }))
})

module.exports = router;
