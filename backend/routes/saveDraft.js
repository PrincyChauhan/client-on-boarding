const express = require("express");
const saveDraftController = require("../controllers/saveDraftController");
const router = express.Router();

router.post("/api/save-draft", saveDraftController.draft);

module.exports = router;
