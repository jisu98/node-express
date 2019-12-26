const express = require('express');
const home = require('./home');
const form = require('./form');
const board = require('./board');
const search = require('./search');

const router = express.Router();

// 비슷한 기능끼리 폴더로 묶어서 관리하는 게 좋습니다. 
router.use('/', home);
router.use('/form', form);
router.use('/board', board);
router.use('/search', search);

module.exports = router;