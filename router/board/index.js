const express = require('express');
const boardCtrl = require('./board.ctrl');

const router = express.Router();

router.get('/', boardCtrl.index);
router.get('/:id', boardCtrl.show);

module.exports = router;