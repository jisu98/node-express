const express = require('express');
const formCtrl = require('./form.ctrl');

const router = express.Router();

router.get('/', (req,res) => { res.render('form'); }); // 이렇게 컨트롤러 없이 바로 써도 됩니다. 
router.post('/submit', formCtrl.submit);

module.exports = router;