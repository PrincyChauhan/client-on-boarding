const express = require("express");
const getdraftController = require("../controllers/getDraftController");
const router = express.Router();

router.get("/api/:client_id", getdraftController.getdraftByClientID);

module.exports = router;
