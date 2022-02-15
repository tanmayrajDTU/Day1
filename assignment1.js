function EmployeeDetails(){
    var name;
    var age ;
    var designation ;
    var salary;
    
    return {
        name: name,
        age: age,
        designation: designation,
        salary : salary,
    }

}
const arr = [];
var totalEmp = prompt("Total Number of Employees ? ");
parseInt(totalEmp);
for (let index = 0; index < totalEmp; index++) {
    var NAME = prompt("What is your name ? ");
    var AGE = prompt("What is  your age ?");
    var Design = prompt("What is  your Designation ? ");
    var SALARY = prompt("What is your salary ? ");
    var x = EmployeeDetails();
    x.name=NAME;
    x.age = AGE;
    x.designation = Design;
    x.salary = SALARY;
    arr.push(x);
}
console.log(arr);
// console.log(arr[1].name);
// console.log(arr[2].salary);