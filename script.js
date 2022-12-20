//1.
console.log(`You can ignore single and double quotes like this \\'\\' \\"\\"`);

//2.
alert('Please enter your data');
let Name = prompt('Please enter your name', 'Name');
alert(`Your name is: ${Name}`);
let Surname = prompt('Please enter your surname', 'Surname');
alert(`Your full name is: ${Name} ${Surname}`);
let Age = prompt('How old are you?');
alert(`Your full name is: ${Name} ${Surname}, your age is: ${Age}`);
let isAdmin = confirm('Are you admin?');
alert(
  `Your full name is: ${Name} ${Surname}, your age is: ${Age}, admin status: ${isAdmin}`
);

//3.
console.log(Boolean(alert('5'))); //alert не повертає нічого, тобто underfined, а приведене до булевого значення буде false
console.log(true > false); //true приводиться до 1, а false до 0, тому результат true
console.log(true > 5); //true приводиться до 1, а 1 < 5, тому результат false
console.log(true < '5'); //true приводиться до 1, а рядок '5' до числа 5, тому результат true
console.log(true > null); //true приводиться до 1, а null до 0, тому результат true
