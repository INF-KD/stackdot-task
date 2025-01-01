const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const { router } = require("./routes/index.js");
const { dbPool } = require("./configs/db.config.js");
const { logger } = require("sequelize/lib/utils/logger");

const PORT = process.env.PORT || 3030;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extends: false }));
app.use(router);

// Init Schemas
require("./entity")(dbPool);
require("./entity/associations.js")(dbPool);

global.dbPool = dbPool;

dbPool
  .sync({
    logger,
    force: false,
  })
  .then(() => {
    app.listen(PORT, (err) => {
      if (!err) {
        console.log(`http://localhost:${PORT}`);
      }
    });
  })
  .catch((error) => {
    console.log(`Failed to start server`, error);
  });
