const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";
const axios = require("axios");

const onlyChinese = (e) => e.pais === "China";
const onlyWomen = (e) => e.genero === "F";
const lowestWage = (employee, currentEmployee) => {
	return employee.salario < currentEmployee.salario
		? employee
		: currentEmployee;
};

axios.get(url).then((response) => {
	const employees = response.data;

	// Lowest paid chinese woman?
	const employee = employees
		.filter(onlyChinese)
		.filter(onlyWomen)
		.reduce(lowestWage);

	console.log(employee);
});
