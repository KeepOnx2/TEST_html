// TypeScript + OOP
/*
1) TypeScript is Object-Oriented JavaScript
2) OOP is a software development paradigm that follows REAL-WORLD MODELLING
3) Objects communicate with each other via METHODS
	a) Object {
		An object is real representation of any entity.
	} Every Object must have these three features:
		I) State = described by the attributes of an object
		II) Behavior = describes how the object will act
		III) Identity = a unique value that distinguishes an object from a set of similar such objects
	b) Class {
		A blueprint for creating objects;
		A class encapsulates data for the object;
	}
	c) Method {
		Facilitates communication between objects;
	}
*/
class Greeting {
	greet():void {
		console.log("Hello World!!")
	}
}

var obj = new Greeting();
obj.greet();
/*
1) I defined a class 'Greeting'
2) The class has a method 'greet()'
3) The method prints the "Hello World" on the terminal
4) The 'new' keyword creates an object of the class '(obj)'
5) The object invokes the method 'greet()'
*/
// On compiling, the JavaScript will be:
var Greeting = (function () {
	function Greeting() {
	}
	Greeting.prototype.greet = function () {
		console.log("Hello World!!");
	};
		return Greeting;
}());

var obj = new Greeting();
obj.greet();


// Types
/*
1) The Type System represents the different types of values suppported by the language
2) The Type System checks the validity of the supplied values, before they are stored or manipulated by the program
	a) It also allows for richer code hinting and automated documentation too
*/
// Data type classification:
/*
A) The Any Type:
	1) The 'any' data type is the super/master of all types in TypeScript.
	2) Denotes a dynamic type
	3) Using == opting out of type checking for a variable
B) Built-in Types
	1) Number
	2) String
	3) Boolean
	4) Null
	5) Void {
		Used on function return types to represent non-returning functions
	};
	6) Undefined
C) User-defined Types
	1) Enumerations (enums)
	2) Classes
	3) Interfaces
	4) Arrays
	5) Tuple
*/

//**************************** Variable Declaration ************************************//
/*
1) The type syntax for declaring a variable is to include a colon ':' after the variable name, followed by its type
2) I have three options when declaring a variable:
*/
// I) Declare its type + value in one statement:
var [identifier]:[type-annotation] = value;

// II) Declare its type with no value (return undefined):
var [identifier]:[type-annotation];

// III) Declare without value or type (data type = any, value = undefined)
var [identifier];

// e.g.
var name:string = "Mary"; // Stores the a value of type string

var name:string; // String variable. Value = undefined

var name = "Mary" // Inferred from the data type of the value. Variable = type string

var name; // Data type = any, value = undefined

// e.g. Variables in TypeScript
var name:string = "John";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2;
console.log("name" + name);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("the sum of the scores: " + sum);

/*
1) The compiler will generate errors if I attempt to assign a value to a variable of different types.
	a) = Strong Typing
2) The Strong Typing syntax ensures that types specified on either side of the assignment operator are the same.
*/
var num:number = "hello"  // return compilation error


// **************************************** Type Assertion ****************************************//
/*
1) TypeScript allows me to change the variable from one type to another
2) The syntax is to put the target type in between < > and place it in front of the var or expression
*/
var  str = '1';
var str2:number = <number> <any> str;  // str is now a number type
console.log(str2);


// **************************************** Infered Typing ********************************************//
/*
NOTE) This feature is optional
1) TypeScript also encourages dynamic typing of variables
	a) = declaring a variable without a type
*/


// *************************************** Variable Scope **********************************************//
/*
A) The scope of the variable specifies where the variable is defined
	i) The availability of a variable within a program is determined by its scope

	1) Global Scope {
		Declared outside of the programming constructs;
		These variables can be accessed from anywhere within my code
	}
	2) Class Scope {
		a.k.a 'fields'
		Fields/Class variables are declared within the class but outside the methods
		These can be accessed using the object of the class
		Fields can also be static
		Static fields can be accessed using the class name
	}
	3) Local Scope {
		Declared within the constructs like methods, loops, etc.
		Only accessible within the construct where they were declared
	}
*/
var global_num = 12;
class Numbers {
	num_val = 13;
	static sval = 10;

	storeNum():void {
		var local_num = 14;
	}
}
console.log("Global Num: " + global_num);
console.log(Numbers.sval);
var obj = new Numbers();
console.log("Global Num: " + obj.num_val);


// *************************************** Conditional Operator ***************************************//
/*
1) '?' used to represent a conditional expression
	a) a.k.a ternary operator
*/
test ? expr1 : expr2;
/*
- Test = refers to the conditional expression
- expr1 = value returned if the condition is true
- expr2 = value returned if the condition is false
*/
var num:number = -2;
var result = num > 0 ?"positive":"non-positive";
console.log(result);


// **************************************** Deceision Making *******************************************//
/*
1) Decision-making structures require that one or more conditions to be evaluated or tested
2) Statements {
	a) if 
	b) else
	c) elseif
	d) switch {
		= allows a variable to be tested for == agains a list of values
	}	
}
*/


// **************************************** Loops **********************************************//
/*
1) Definite Loop
	a) for 
2) Indefinite Loop
	a) while {
		= excecutes the instructions each time the condition specified is true;
	}	
	b) do...while {
		= same as while but differs by not evaluating the first time the loop executes;
	}
*/
var n:number = 5
while(n > 5) {
	console.log("Entered while");
}

do {
	console.log("Entered do");
} while(n>5);


// ********************************************* Break Statements **************************************//
/*
1) Used to take control of the construct
2) Exits the loop when a break statement is specified
*/
var i:number = 1;
while(i <= 10) {
	if(i % 5 == 0) {
		console.log("The first multiple of 5 between 1 and 10 is : " +i);
		break;
	}
	i++;
}


// ******************************************* Continue Statements ************************************************//
/*
1) Skips the subsequent statements in the current iteration and takes the control back to the beginning of the loop
2) Differs from 'break' by terminating the current iteration and starts the subsequent iteration.
3) Doesn't exit the loop
*/
var num:number = 0;
var count:number = 0;

for(num = 0; num <= 20; num++) {
	if(num % 2 == 0) {
		continue;
	}
	count++;
}
console.log("The count of odd values between 0 and 20 is: " + count);


// ***************************************** Infinite Loop ********************************************//

for(;;) {
	console.log("This is an endless loop");
}

while(;;) {
	console.log("This is an endless loop");
}


// ***************************************** Functions *********************************************//
/*
1) Defining a function {
	Instructions for how the specific task will behave;
}
2) Calling a function {
	"Executes" the function;
}
3) Returning a function {
	Functions may also return value along with control, back to the caller;
}
4) Parameterized functions {
	Mechanisms to pass values to functions;
}

** Optional Parameters
1) Can be used when args don't need to be comulsorily passed for a function's execution
2) To mark a parameter to be optional, append a '?' next to its name
3) Put optional parameters as the last arg
*/
function disp_details(id:number, name:string, mail_id?:string) {
	console.log("ID:", id);
	console.log("Name", name);

	if(mail_id != undefined) {
		console.log("Email ID", mail_id);
	}
}
disp_details(123, "John");
disp_details(111, "Mary", "mary@xyz.com");

/*
** Rest Parameters
1) Similar to variable args in Java
2) Do not restrict the number of values that you can pass to a function
3) Values passed must all be the same type
4) Act as "placeholders" for multiple args of the same type
5) To declare, the param name is prefixed with '...'
*/
function addNumber() {
	var i;
	var sum:number = 0;

	for(i = 0; i < nums.length; i++) {
		sum = sum + nums[i];
	}
	console.log("Sum of the numbers", sum);
}
addNumber(1, 2, 3);
addNumber(10, 10, 10, 10, 10);

/*
** Default Parameters
*/
function calculate_discount(price:number, rate:number = 0.50) {
	var discount = price * rate;
	console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);


// **************************************** Lambda Functions ********************************************//
/*
1) Lambda refers to anonymous functions
2) Concise mechanisms to represnt anonymous functions
3) a.k.a Arrow functions

4) Anatomy:
	a) Parameters (optional)
	b) The fat arrow notation/lambda notation {
		'=>'
	}
	c) Statements
*/
var foo = (x:number)=>10 + x;
console.log(foo(100));

/*
** Lambda Statements
1) Anonymous statement function that points to a block of code
*/
var foo = (x:number)=> {
	x = 10 + x;
	console.log(x)
}
foo(100);


// ************************************* Syntactic Variations ****************************************//
/*
** Parameter Type Inference
1) Not mandatory to define the data type
*/
var func = (x)=> {
	if(typeof x == "number") {
		console.log(x + " is numeric");
	} else if(typeof x == "string") {
		console.log(x + " is a string")
	}
}
func(12);
func("Tom");


// ************************************** Function Overloads ******************************************//
/*
1) Functions have the capability to operate differently on the basis of the input provided 
2) A program can have multiple methods with the same name with different implementation
*/
// Step 1 = declare multiple function with the same name but different function signiture
function disp(string):void;
function disp(number):void;
/*

*/