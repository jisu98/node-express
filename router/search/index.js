const express = require('express');
const searchCtrl = require('./search.ctrl');

const router = express.Router();

router.get('/', searchCtrl.search); // 이렇게 컨트롤러 없이 바로 써도 됩니다. 

module.exports = router;