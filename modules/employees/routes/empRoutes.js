const router = require("express").Router();
const empControllers = require("../controllers/checkInController");
console.log('route')
//Get employees
router.get("/getemployees", empControllers.getAllEmployees);

//Save employee
router.post("/save-employee", empControllers.addEmployee);

//Update employees
router.put("/update-employee", empControllers.updateEmployee);

//Delete employee
//router.delete("/delete-employee", empControllers.deleteEmployee);

//Exporting routes
module.exports = router;