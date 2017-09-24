// Type Annotations
/*
1) Lightweight way to record the intended contract of the function or variable
2) Below I use a single string parameter in the function
3) I will try changing the call greeter to pass an array instead

NOTE) This will return an error but TS will notify that your code my not run as expected
*/
function greeter(person: string) {
	return "Hello, " + person;
}

var usr = [0, 1, 2];

document.body.innerHTML = greeter(usr);


// Interfaces
/*
1) Next, I will us an interface to develop this code further
2) What this interface will do is describe objects that have a firstName + lastName field
3) TypeScript will make two types compatible if their internal structure is also compatible
4) This will allow me to implement an interface just by having the shape the interface requires, without an explicit 'implement' clause
*/
interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person: Person) {
	return "Hello, " + person.firstName + " " + person.lastName;
}

var usr = { firstName: "Lucy", lastName: "Ricardo" };

document.body.innerHTML = greeter(usr);


// Classes
/*
1) TypeScript adds class-based object-oriented programming to JavaScript
2) First, I will make a 'student' class with a constructor and a few public fields
	a) Classes and interfaces work well together
3) When I use 'public' on args to the constructor, this is shorthand that'll allow me to automatically create properties with that name
*/
class Student {
	fullName: string;
	constructor(public firstName: string, public middleInitial: string, public lastName: string) {
		this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter(person : Person) {
	return "Hello, " + person.firstName + " " person.lastName; 
}

var usr = new Student("Lucy", "I.", "Ricardo");

document.body.innerHTML = greeter(usr);


