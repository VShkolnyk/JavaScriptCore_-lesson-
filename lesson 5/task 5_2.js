let EmployeeSalaries = {
	employee1 : 1500,
	employee2 : 800,
	employee3 : 2000,
	employee4 : 3000,
	employee5 : 1200
}

let total = 0;
for(let employee in EmployeeSalaries){
	total += EmployeeSalaries[employee];
}

console.log(`The total salary will be equal ${total}`);