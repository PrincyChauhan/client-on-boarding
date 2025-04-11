const express = require("express");
const cors = require("cors");
const db = require("./models");
require("./config/db");

const clientRoutes = require("./routes/client");
const saveDraftRoutes = require("./routes/saveDraft");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/client", clientRoutes);
app.use("/draft", saveDraftRoutes);
(async () => {
  await db.syncDatabase();
})();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
