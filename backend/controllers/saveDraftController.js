const FormDraft = require("../models/FormDraft");

const draft = async (req, res) => {
  try {
    const { client_id, elements } = req.body;

    if (!client_id || !elements) {
      return res.status(400).json({ error: "Missing client_id or elements" });
    }

    const draft = await FormDraft.create({ client_id, elements });
    console.log("Draft saved:", draft);
    res.status(201).json(draft);
  } catch (error) {
    console.error("Error saving draft:", error);
    res
      .status(500)
      .json({ error: "Error saving draft", details: error.message });
  }
};

module.exports = {
  draft,
};
