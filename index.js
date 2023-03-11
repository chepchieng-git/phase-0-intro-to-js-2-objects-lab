// Write your solution in this file!
const employee = {};
function updateEmployeeWithKeyAndValue (employee, key, value) {
    
    return Object.assign({}, employee, {[key]: value});
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = Object.assign({}, employee);
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    Object.assign({}, employee);
    delete employee[key];
    return employee;
}
