const express = require("express");
const router = express.Router();

router.use("/boards", require("./board_routes"));


module.exports = router;