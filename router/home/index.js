const express = require('express');
const homeCtrl = require('./home.ctrl');

const router = express.Router();

router.get('/', homeCtrl.getMain);
router.get('/redirect', homeCtrl.redirect);
router.get('/render', homeCtrl.render);
router.get('/send1', homeCtrl.send1);
router.get('/send2', homeCtrl.send2);

module.exports = router;