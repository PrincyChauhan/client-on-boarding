const FormDraft = require("../models/FormDraft");
const FormPublished = require("../models/FormPublished");

const publishDraft = async (req, res) => {
  const draftId = req.params.id;
  try {
    const draft = await FormDraft.findByPk(draftId);
    if (!draft) {
      return res.status(404).json({ message: "Draft not found" });
    }
    const published = await FormPublished.create({
      client_id: draft.client_id,
      elements: draft.elements,
    });
    console.log(published, "------------------published-----------------");
    return res.json({ message: "Draft published successfully", published });
  } catch (error) {
    console.error("Error publishing draft:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { publishDraft };
