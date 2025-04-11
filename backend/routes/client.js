const express = require("express");
const clientController = require("../controllers/clientController");
const router = express.Router();

router.post("/api/create-client", clientController.createClient);
module.exports = router;
