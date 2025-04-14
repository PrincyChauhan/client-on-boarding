const { Client } = require("../models");

const createClient = async (req, res) => {
  try {
    const { name, status } = req.body;
    const client = await Client.create({ name, status });
    res.status(201).json(client);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to create client", details: error.message });
  }
};

module.exports = { createClient };
