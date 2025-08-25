require("dotenv").config();
const app = require("./src/app");
const port = process.env.PORT || 30001;
const dbConnection = require("./src/config/connection.js");
const seedDB = require("./src/seed/seed.js");

dbConnection()
  .then(async () => {
    await seedDB();
    app.listen(port, () => {
      console.log(`Express server running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to DB or Seed");
  });
