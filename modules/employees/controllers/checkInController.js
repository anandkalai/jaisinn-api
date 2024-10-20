const empModel = require("../../../models/empModels");

module.exports = {
addEmployee: async (req, res) => {console.log(req)
try {
const employee = await empModel.create(req.body);
await employee.save();
res.status(201).send({ message: "Employee added", success: true });
} catch (error) {
res.status(500).send({ message: "Internal server error", success: false });
}
},
getAllEmployees: async (req, res) => {
try {
const employees = await empModel.find({});
if (employees.length > 0) {
res.status(200).send({ data: employees, success: true });
} else {
res.status(200).json({ message: "user not found", success: true });
}
} catch (error) {
res.status(500).send({ message: "Internal server error", success: false });
}
},
updateEmployee: async (req, res) => {
try {
const resp = await empModel.updateOne({ _id: req.body.id },
{ ...req.body })
res.status(200).json({ message: "Update success", success: true });

} catch (error) {
res.status(500).send({ message: "Internal server error", success: false });
}
},
deleteEmployee: async (req, res) => {
try {
const employeExist = await empModel.findOne({ _id: req.body.id });
if (employeExist) {
const deleteEmp = await empModel.deleteMany({ _id: req.body.id });
if (deleteEmp["deletedCount"] >= 1) {
res.status(200).send({ message: "Delete success", success: true });
} else {
res.status(500).send({ message: "Something went wrong..!", success: false });
}
} else {
res.status(200).send({ message: "User not found", success: false });
}
} catch (error) {
res.status(500).send({ message: "Internal server error", success: false });
}
}
};