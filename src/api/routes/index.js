const express = require('express')
const router = express.Router()
const knex = require('../../../knexConfig')

router.get('/tokens', async function(req, res, next) {
  try{
    const result = await knex('tokens')
    res.json({ body: result })
  } catch(err){
    next(err)
  }
});

router.post('/messages', async function(req, res, next) {
  try{
    const params = req.body
    const result = await knex('messages')
      .returning('id')
      .insert({
        body: params.body
    })
    res.json({ body: result })
  } catch(err){
    next(err)
  }
});

router.get('/messages', async function(req, res, next) {
  try{
    const result = await knex('messages')
    res.json({ body: result })
  } catch(err){
    next(err)
  }
});

module.exports = router
