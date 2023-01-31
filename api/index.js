const express = require("express");
const cors = require("cors");
const db = require("./models");
var GenerateRoutes = require('./routes')
const app = express();
db.sequelize.sync();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

GenerateRoutes(app);
// simple route
app.get("/healthCheck", (req, res) => {
  res.json({ message: "Welcome to  application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});