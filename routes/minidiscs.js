const express = require('express')
const router = express.Router()
const knex = require('../knex')

// READ ALL records for this table
router.get('/', (req, res, next) => {
  // res.send('ALL RECORDS')
  knex('minidiscs')
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
})

// READ ONE record for this table
router.get('/:id', (req, res, next) => {
  // res.send('ONE RECORD')
  knex('minidiscs')
    .where('id', req.params.id)
    .then((rows) => {
      res.json(rows)
    })
    .catch((err) => {
      next(err)
    })
})

// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  // res.send('CREATED RECORD')
  knex('minidiscs')
    .insert({
      "title": req.body.title,
      "artist": req.body.artist,
      "genre": req.body.genre,
      "description": req.body.description,
      "cover_url": req.body.cover_url
    })
    .returning('*')
    .then((data) => {
      res.json(data[0])
    })
    .catch((err) => {
      next(err)
    })
})

// UPDATE ONE record for this table
router.put('/:id', (req, res, next) => {
  // res.send('UPDATED RECORD')
  knex('minidiscs')
    .where('id', req.params.id)
    .then((data) => {
      if (!data) return next()

      knex('minidiscs')
      .where('id', req.params.id)
      .limit(1)
      .update({
        "title": req.body.title,
        "artist": req.body.artist,
        "genre": req.body.genre,
        "description": req.body.description,
        "cover_url": req.body.cover_url
      })
      .returning('*')
      .then((data) => {
        res.json(data[0])
      })
    })
    .catch((err) => {
      next(err)
    })
})

// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  // res.send('DELETED RECORD')
  knex('minidiscs')
    .where('id', req.params.id)
    .first()
    .then((row) => {
      if(!row) return next()

      knex('minidiscs')
        .del()
        .where('id', req.params.id)
        .then(() => {
          res.send(`ID ${req.params.id} Deleted`)
        })
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
