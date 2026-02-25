const express = require('express');
const bodyParser = require("body-parser");

const sequelize = require('./config/connection');
const routes = require("./routes");



const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3001;


app.use(routes);





sequelize.authenticate()
  .then(() => {
    console.log('✅ The database connection was successfully established.');
    
    app.listen(PORT, () => {
      console.log(`🚀The server is running at http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Could not connect to the database:', err);
  });