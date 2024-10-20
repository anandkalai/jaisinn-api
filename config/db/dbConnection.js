const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//DB uri
const uri = process.env.DB_URL;

mongoose.connect(uri, {}); //useUnifiedTopology: true, useNewUrlParser: true

const connection = mongoose.connection;

module.exports = connection;