const express = require('express');
const fs = require('fs');
const router = express.Router();
const handler = require('./handler');

router.get('/', (req, res) => {
   fs.readFile('server/db/cartData.json', 'utf-8', (err, data) => {

   })
})