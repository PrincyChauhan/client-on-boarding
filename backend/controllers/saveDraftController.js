const draft = async (req, res) => {
  try {
    const { elements } = req.body;
    const draft = await FormDraft.create({ elements });
    console.log("Draft saved:", draft);
    res.status(201).json(draft);
  } catch (error) {
    res.status(500).json({ error: "Error saving draft" });
  }
};

module.exports = {
  draft,
};
