const FormDraft = require("../models/FormDraft");

const getdraftByClientID = async (req, res) => {
  const { client_id } = req.params;
  if (!client_id) {
    return res.status(400).json({ error: "Missing client_id in query params" });
  }
  try {
    const getDraftData = await FormDraft.findAll({
      where: { client_id },
    });

    res.status(200).json(getDraftData);
  } catch (error) {
    console.error("Error fetching draft:", error);
    res
      .status(500)
      .json({ error: "Error fetching draft", details: error.message });
  }
};

module.exports = {
  getdraftByClientID,
};
