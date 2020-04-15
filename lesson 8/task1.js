function EmployeeMonth(salary) {
    this.salary = salary;
}

function EmployeeHour(salary, hourAmount) {
    this.salary = salary;
    this.hourAmount = hourAmount;
}

EmployeeHour.prototype = new EmployeeMonth();

EmployeeMonth.prototype.getData = function () {
    console.log(`За рік отримую заробітню плату в розмірі
    ${this.salary*12}`);
}
EmployeeHour.prototype.getData = function () {
    console.log(`За рік отримую заробітню плату в розмірі
    ${this.salary*this.hourAmount*12}`);
}

let employee1 = new EmployeeMonth(2500);
let employee2 = new EmployeeHour(50, 30);

employee1.getData();
employee2.getData();