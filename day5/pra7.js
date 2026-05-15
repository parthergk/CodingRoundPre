const employees = [
  { name: "Gaurav", department: "Engineering", salary: 70000, active: true },
  { name: "Rahul", department: "HR", salary: 40000, active: false },
  { name: "Amit", department: "Engineering", salary: 90000, active: true },
  { name: "Neha", department: "Design", salary: 60000, active: true },
  { name: "Riya", department: "Engineering", salary: 85000, active: true },
];

const groupd = employees
  .filter((item) => item.active === true)
  .reduce((acc, item) => {
    const key = item.department;

    if (!acc[key]) {
      acc[key] = {
        heighSalary: 0,
        totalEmployees: 0,
        highestSalaryEmployee: "",
      };
    }

    acc[key].totalEmployees += 1;
    if (item.salary > acc[key].heighSalary) {
      acc[key].heighSalary = item.salary;
      acc[key].highestSalaryEmployee = item.name;
    }
    return acc;
  }, {})
  

  console.log("Output", Object.keys(groupd).map((item) => ({
    department: item,
    totalEmployees: groupd[item].totalEmployees,
    highestSalaryEmployee: groupd[item].highestSalaryEmployee,
  })));
  