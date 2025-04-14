const express = require("express");
const publishDraftController = require("../controllers/publishDraftController");
const router = express.Router();

router.post("/:id", publishDraftController.publishDraft);

module.exports = router;
