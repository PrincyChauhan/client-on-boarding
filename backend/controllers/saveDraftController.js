const FormDraft = require("../models/FormDraft");

const draft = async (req, res) => {
  try {
    const { client_id, elements } = req.body;
    if (!client_id || !elements) {
      return res.status(400).json({ error: "Missing client_id or elements" });
    }
    const existingDraft = await FormDraft.findOne({ where: { client_id } });
    if (existingDraft) {
      const updatedDraft = await existingDraft.update({ elements });
      return res.status(200).json(updatedDraft);
    } else {
      const newDraft = await FormDraft.create({ client_id, elements });
      console.log("Draft saved:", newDraft);
      return res.status(201).json(newDraft);
    }
  } catch (error) {
    console.error("Error saving/updating draft:", error);
    res
      .status(500)
      .json({ error: "Error saving/updating draft", details: error.message });
  }
};

module.exports = {
  draft,
};
