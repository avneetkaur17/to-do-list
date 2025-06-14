// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;

let students = 30;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 2 (This is exponent);
// students = students % 1 (This is modulus);

// students += 1;
// students -= 1;
// students *= 1;
// students /= 1;
// students **= 1;
// students %= 1;

// students++;
// students--;


console.log(students);

/*  
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication and division and modulo
    4. addition and subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2;
// 1 + 2 * 3 + 16
// 1 + 6 + 16
// 23

console.log(result);