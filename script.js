//1.

// let firstMonthSalary = Number(prompt('Enter first month salary', '0'));
// let secondMonthSalary = Number(prompt('Enter second month salary', '0'));
// alert(`Your salary for 2 month is ${firstMonthSalary + secondMonthSalary}`);

//2.
// let firstMonthSalary1 = Number(prompt('Enter first month salary', '0'));
// let secondMonthSalary1 = Number(prompt('Enter second month salary', '0'));
// alert(`You have extra bonus! Your total salary was: ${firstMonthSalary1 + secondMonthSalary1}$
// It's  increase for 1$ and now it is ${firstMonthSalary1 + secondMonthSalary1 + 1}$`);

//3.
const MinSalaryLevel = 2000;
let firstMonthSalary2 = Number(prompt('Enter first month salary', '0'));
let secondMonthSalary2 = Number(prompt('Enter second month salary', '0'));
alert(
  `Will you work next? ${
    firstMonthSalary2 + secondMonthSalary2 + 1 >= MinSalaryLevel
  }`
);
