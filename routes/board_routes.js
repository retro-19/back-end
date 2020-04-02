const express = require('express');
const router = express.Router();

const { index, createBoard, getBoardByName } = require("../controllers/board_controller");

router.get('/', index)
router.get('/:name', getBoardByName);
router.post('/create', createBoard);

module.exports = router 