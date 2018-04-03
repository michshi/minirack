const express = require('express')
const router = express.Router()
const knex = require('../knex')

// READ ALL records for this table
router.get('/', (req, res, next) => {
  res.send('ALL RECORDS')
})

// READ ONE record for this table
router.get('/:id', (req, res, next) => {
  res.send('ONE RECORD')
})

// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  res.send('CREATED RECORD')
})

// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  res.send('UPDATED RECORD')
})

// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  res.send('DELETED RECORD')
})

module.exports = router
