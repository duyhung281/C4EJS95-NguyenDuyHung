// Question 3. Write a program to print out
// 3a. 7 numbers, starting from 0 (no user input)
for (let i = 0; i < 7; i++) {
    console.log(i);
}

// 3b. n numbers, starting from 0, n entered by user
const n = prompt('Enter a number?');
for (let i = 0; i < n; i++) {
    console.log(i);
}

// 3c. A sequence of numbers, starting from 3, ending before n, n entered by user
const n = prompt('Enter n?');
for (let i = 3; i < n; i++) {
    console.log(i);
}

// 3d. A sequence of numbers, starting from c, ending before n, c and n entered by user
const n = prompt('Enter n?');
const c = prompt('Enter c?');
for (let i = c; i < n; i++) {
    console.log(i);
}

// 3e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
const n = prompt('Enter n?');
const c = prompt('Enter c?');
const s = 3;
for (let i = c; i < n; i += s) {
    console.log(i);
}

// 3f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
const n = prompt('Enter n?');
const c = prompt('Enter c?');
const s = prompt('Enter s?');
for (let i = c; i < n; i += s) {
    console.log(i);
}

// Question 4. Write a program to calculate the factorial of n: (1 * 2 * 3 *...* n), n entered by user
const n = prompt('Enter n?');
let factorial = 1;
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}
alert('The factorial of ' + n + ' is ' + factorial)

// Question 5. Write a program asking users their age, and then decide if they are old enough to view a 14+ content
const age = prompt('How old are you?');
if (age < 14) {
    alert('You are not old enough to view this content.');
} else {
    alert('Enjoy!');
}

// Question 6. Write a program asking user to enter a number n, then check if n is in the lower half or higher half of 0 - 9 range
const n = prompt('Enter n?');
if (n < 9 / 2) {
    alert(n + ' is in the lower half of 9.');
} else if (n == 9 / 2) {
    alert(n + ' is the middle point of 9.');
} else {
    alert(n + ' is in the higher half of 9.');
}

// Question 7. Write a program asking user to enter two numbers x and n, then check if x is in lower half or higher half of n
const n = prompt('Enter n?');
const x = prompt('Enter x?');
if (x < n / 2) {
    alert(x + ' is in the lower half of ' + n + '.');
} else if (x == n / 2) {
    alert(x + ' is the middle point of ' + n + '.');
} else {
    alert(x + ' is in the higher half of ' + n + '.');
}

// Question 8. Write a script to check if a number is even (divisible by 2) or odd number
const x = prompt('Enter x?');
if (x % 2 == 0) {
    alert(x + ' is an even number.');
} else {
    alert(x + ' is an odd number.');
}

// Question 9


// Question 10. Write a script to calculate the BMI (Body Mass Index) of a person
const weight = prompt('Enter your weight in kg?');
const height = prompt('Enter your height in cm?');
const BMI = weight / (height * height / 10000);
BMI = BMI.toFixed(1);
if (BMI < 16) {
    alert('Your BMI is ' + BMI + '.');
    alert('You are severely underweight.');
} else if (BMI >= 16 && BMI < 18.5) {
    alert('Your BMI is ' + BMI + '.');
    alert('You are underweight.');
} else if (BMI >= 18.5 && BMI < 25) {
    alert('Your BMI is ' + BMI + '.');
    alert('You are normal.');
} else if (BMI >= 25 && BMI < 30) {
    alert('Your BMI is ' + BMI + '.');
    alert('You are overweight.');
} else {
    alert('Your BMI is ' + BMI + '.');
    alert('You are obese.');
}

// Question 11. Use JS Turtle, to draw the following shapes
// 11a. A square
for (let i = 1; i <= 4; i++) {
    fd(50);
    rt(90);
}

// 11b. A triangle
for (let i = 1; i <= 3; i++) {
    fd(50);
    rt(120);
}

// 11c. A pentagon
for (let i = 1; i <= 5; i++) {
    fd(50);
    rt(72);
}

// 11d. A hexagon
for (let i = 1; i <= 6; i++) {
    fd(50);
    rt(60);
}

// Question 12. Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users
const n = prompt("Enter the number of edges");
for (let i = 1; i <= n; i++) {
    fd(50);
    rt(180 - (180 * (n - 2)) / n);
}

// Question 13. Use JS Turtle to draw n polygons, n entered by users
const n = prompt("How many polygons?");
for (let i = 3; i <= parseInt(n) + 2; i++) {
    for (let j = 1; j <= i; j++) {
        fd(50);
        rt(180 - (180 * (i - 2)) / i);
    }
}