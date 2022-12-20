//1.

let firstMonthSalary = Number(prompt('Enter first month salary', '0'));
let secondMonthSalary = Number(prompt('Enter second month salary', '0'));
alert(`Your salary for 2 month is ${firstMonthSalary + secondMonthSalary}`);

//2.
alert(`You have extra bonus! Your total salary was: ${
  firstMonthSalary + secondMonthSalary
}$
It's  increase for 1$ and now it is ${
  firstMonthSalary + secondMonthSalary + 1
}$`);

//3.
const MinSalaryLevel = 2000;
alert(
  `Will you work next? ${
    firstMonthSalary + secondMonthSalary + 1 >= MinSalaryLevel
  }`
);

//4.
alert(firstMonthSalary + secondMonthSalary + 1 >= MinSalaryLevel && "I'm ready to work" || "I'm out");
