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

module.exports = router
