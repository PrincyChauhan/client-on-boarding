const express = require("express");
const cors = require("cors");
const db = require("./models");
require("./config/db");

const app = express();

app.use(express.json());
app.use(cors());

(async () => {
  await db.syncDatabase();
})();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
