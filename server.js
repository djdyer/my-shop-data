// Requirements
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

// Express Invoked
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// syncs sequelize models to the database / Launches Server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
