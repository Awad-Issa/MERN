const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT;
require('./config/mongoose.config');
const cors = require("cors"); // This is new
require('./routes/product.route')(app);
app.use(express.json(), express.urlencoded({ extended: true }), cors());
app.listen(port, () => console.log(`Listening on port: 8000`) );