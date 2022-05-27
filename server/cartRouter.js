const express = require('express');
const fs = require('fs');
const router = express.Router();
const handler = require('./handler');

router.get('/', (req, res) => {
   fs.readFile('server/db/cartData.json', 'utf-8', (err, data) => {
      if(err){
         res.sendStatus(404, JSON.stringify({result: 0, text: err}));
      } else {
         res.send(data);
      }
   })
});

router.post('/:id', (req, res) => {
   handler(req, res, 'add', 'server/db/cartData.json');
});

router.put('/:id', (req, res) => {
   handler(req, res, 'change', 'server/db/cartData.json');
});

router.delete('/:id', (req, res) => {
   handler(req, res, 'remove', 'server/db/cartData.json');
});

module.exports = router;