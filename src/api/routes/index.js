const express = require('express')
const router = express.Router()
const knex = require('../../../knexConfig')

router.get('/products', async function(req, res, next) {
  try{
    const result = await knex('products')
    res.json({ body: result })
  } catch(err){
    next(err)
  }
});

router.post('/products', async function(req, res, next) {
  try{
    const param = req.body
    const result = await knex('products')
      .returning('id')
      .insert({
        title: param.title,
        price: param.price,
        imgLink: param.imgLink,
        body: param.body
    })
    res.json({ body: result })
  } catch(err){
    if (err.constraint === 'products_title_unique'){
      err.status = 400
      err.message = 'duplicate title'
    }
    next(err)
  }
});

router.get('/products/:id', async function(req, res, next) {
  try{
    const id = req.params.id
    const result = await knex('products')
      .where("id", id)
    
    res.json({ body: result })
  } catch(err){
    next(err)
  }
});

router.put('/products/:id', async function(req, res, next) {
  try{
    const param = req.body
    const id = req.params.id
    const result = await knex('products')
      .where('id', id)
      .update(param)
    res.json({ body: !!result })
  } catch(err){
    if (err.constraint === 'products_title_unique'){
      err.status = 400
      err.message = 'duplicate title'
    }
    next(err)
  }
});

router.delete('/products/:id', async function(req, res, next) {
  try{
    const id = req.params.id
    const result = await knex('products')
      .where("id", id)
      .del()
    
    res.json({ body: !!result })
  } catch(err){
    next(err)
  }
});

module.exports = router
