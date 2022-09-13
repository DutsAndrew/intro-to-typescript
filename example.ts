// Type Annotations
  let myName: string = 'Andrew';
  let favNumber: number = 42;
  let isCool: boolean = true;

  // parameters coming in are numbers, the function will return a number
  function sum(a: number, b:number): number {
    return a + b;
  }

  console.log(sum(2, 4));

// Inferred Types
let newName = 'Babel';
let number = 42;
let nah = false;

// parameters coming in are numbers, the function will return a number
function add(a: number, b:number) {
  return a + b;
}

let result = add(2, 4);

// Union Types

  // can write the type as a string and number array or can infer it
  const numbersAndString: (string | number)[] = [3, 2, 'Andrew', 6, 'Samara'];
  console.log(numbersAndString);

  let theAnswer: string | number = 43;
  theAnswer = '43';

// Objects and Interfaces
  interface Person {
    name: string;
    favNumber: number;
  }

  // can use as a validator to check that parameter is of type Person
  function greet(person: Person) {
    return `Hello ${person.name}`;
  }

  console.log(greet({
    name: 'Andrew',
    favNumber: 32,
    catName: 'Anastasia'
  }));
// Optional Properties

// Classes

// Generics

// any, unknown, never

// Type Assertions

// @ts-ignore / @ts-nocheck
