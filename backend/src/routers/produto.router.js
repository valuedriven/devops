const express = require('express');
const produtoController = require('./../controllers/produto.controller');
const router = express.Router();

router.get('/', produtoController.get);

router.post('/', produtoController.post);

module.exports = router;