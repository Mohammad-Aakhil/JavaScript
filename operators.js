x = 10;
y = 5;

Addition = x + y;
Subtraction = x - y;
Multiply = x * y;
Exponential = x ** y;
Quotient = x / y
Remainder  = x % y
Increment = x++
Decrement = x--

console.log('Arthemetic Operators')

console.log('x = 10, y = 5')
console.log("Addition      = x + y = ", Addition)
console.log("Subtraction   = x - y = ", Subtraction)
console.log("Multiply      = x * y = ", Multiply)
console.log("Exponenntial  = x ** y = ", Exponential)
console.log("Quotient      = x / y = ", Quotient)
console.log("Remainder     = x % y = ", Remainder)
console.log("Increment     = x ++ = ", Increment)
console.log("Decrement     = x -- = ", Decrement)


console.log(' ')


console.log('Assignment  Operators')
let a = 10;

console.log("a = 10");

a += 5;   // a = a + 5
console.log("a += 5  →", a);

a -= 3;   // a = a - 3
console.log("a -= 3  →", a);

a *= 2;   // a = a * 2
console.log("a *= 2  →", a);

a **= 2;  // a = a ** 2
console.log("a **= 2 →", a);

a /= 4;   // a = a / 4
console.log("a /= 4  →", a);

a %= 5;   // a = a % 5
console.log("a %= 5  →", a);




console.log('Logical (&&)and Operator')

X = true;
Y = X &&= 10;
console.log("X = true")
console.log("Y = X &&= 10" )
console.log("Y=", Y )
console.log("10 is assigned to Y only if X is either true or 1")


X = false;
Y = X &&= 10;
console.log("X = false")
console.log("Y = X &&= 10" )
console.log("Y=", Y )
console.log("10 is not assigned to Y because X is false and assigns it")

X = 1;
Y = X &&= 10;
console.log("X = 1")
console.log("Y = X &&= 10" )
console.log("Y=", Y )

console.log('Logical (||)and Operator')
X = true;
Y = X ||= 10;
console.log("X = true")
console.log("Y = X &&= 10" )
console.log("Y=", Y )
console.log("Evaluates true means 10 is assigned to Y only if X is any thing among false, 0, null, undefined")

X = false;
Y = X ||= 10;
console.log("X = false")
console.log("Y = X &&= 10" )
console.log("Y=", Y )
console.log("10 is assigned to Y only if X is either true or 1")


console.log("logical ?? Operator")
X = 5;
Y = X ??= 10;
console.log('X = 5')
console.log('Y = X ??= 10')
console.log("Y=", Y )
console.log("Evaluates true means means 10 is assigned to Y only if X is either null or undefined")


console.log('Comparison Operators');

let A = 10, B = 5;

console.log("A = 10, B = 5");

console.log("A == B   →", A == B);    // equal to (value only)
console.log("A === B  →", A === B);   // equal value and type
console.log("A != B   →", A != B);    // not equal (value only)
console.log("A !== B  →", A !== B);   // not equal value or type

console.log("A > B    →", A > B);     // greater than
console.log("A < B    →", A < B);     // less than
console.log("A >= B   →", A >= B);    // greater than or equal
console.log("A <= B   →", A <= B);    // less than or equal

