const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const empRoute = require("./modules/employees/routes/empRoutes");
const connection = require("./config/db/dbConnection");
const cors = require("cors");

const app = express();

//Global middlewares
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(
cors({
origin: "*",
methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
})
);

dotenv.config();
const PORT = process.env.PORT || 8000;

//Checking DB connection here
connection.once("open", function () {
console.log("MongoDB database connection established successfully");
});

//setting employee routes
app.use("/api/emp", empRoute);

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});