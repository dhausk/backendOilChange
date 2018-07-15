const express = require('express');
const router = express.Router();
const queries = require('../db/logQueries');

function validLog(log) {
  const hasVehId = typeof log.veh_id == 'number';
  const hasMaintenance = typeof log.maintenance == 'string' && log.maintenance.trim() != "";
  const hasCost = typeof log.cost == 'number';
  const hasDate = typeof log.date == 'string' && log.date.trim() != "";
  const hasNote = typeof log.note == 'string' && log.note.trim() != "";

  return hasVehId && hasMaintenance && hasDate && hasCost && hasNote;
}

function isValidId(req, res, next) {
  if (!isNaN(req.params.id)) {
    return next()
  } else {
    next(new Error('invalid id'))
  }
}

router.get('/', (req, res) => {
  queries.getAll().then(log => {
    res.json(log);
  })
})

router.post('/', (req, res, next) => {
  if (validLog(req.body)) {
    queries.create(req.body).then(log => {
      res.json(log[0])
    })
  } else {
    next(new Error('invalid log'))
  }
})

router.put('/:id', isValidId, (req, res, next) => {
  if (validLog(req.body)) {
    queries.update(req.params.id, req.body).then(log => {
      res.json(log[0])
    })
  } else {
    next(new Error('invalid log'))
  }
})

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(res.json({ message: "successfully deleted!" }))
})

module.exports = router;
