import { stringLiteral } from "@babel/types";

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

  // interfaces describe what should/shouldn't be in objects
    // if your'e describing an object use an interface
  interface Person {
    name: string;
    favNumber: number;
    dogName?: string;
    streamerType?: streamerType;

    // methods can be optional, ? goes before ()
    currentTime?(): Date;
  }

  // can use as a validator to check that parameter is of type Person
  function greet(person: Person) {
    return `Hello ${person.name}`;
  }

  function greetPersonAndDog(person: Person) {
    if (person.dogName) {
      return `Hello ${person.name} and their dog ${person.dogName}`;
    }
    return greet(person);
  }

  console.log(greet({
    name: 'Andrew',
    favNumber: 32,
    streamerType: "affiliate",
  }));

  console.log(greetPersonAndDog({
    name: 'Andrew',
    favNumber: 4,
    dogName: "blue",
    currentTime() {
      return new Date();
    },
  }));

// type

  // interfaces and types are basically the same, but types can be used with enums
  // if you're describing other things (non-objects) use a type
  type Human = {
    name: string,
    favNumber: number,
    dogName?: string,
  }

  // see interface Person above, you can use types in interfaces
  type streamerType = 'affiliate' | 'partner';
// Classes
  // classes are better for defining a blueprint, with default methods and constructors

  class Person2 {

    // static, is not created on each instance of Person2, it's available for other functions, etc
    static species = 'Homosapian'
    constructor(
      public name:string, 
      public dogName:string, 
      public favNumber:number,

      // protected is only usable in class or extensions of class
      protected internalSecret: string,
      
      // private is only accessible in class
      private privateSecret: string,

      // static
      ) {}
  }

  const andrew = new Person2('Andrew', 'Saddie', 2, 'super-secret', 'super-super-secret');
  console.log(andrew);

  function greetAgain(person: Person2) {
    return `Hello ${person.name}`;
  }
// Generics

// <T> is like an argument to a function
  function sortItems<T>(items: T[], compareFn: (a: T, b: T) => number): T[] {
    return items.sort(compareFn);
  }

  const numbers = [42, 2, 4, 66];
  const sortNumber = sortItems<number>(numbers, (a, b) => a - b);
  console.log(sortNumber);

  const names = ['Rachel', 'Mark', 'Bryan'];
  const sortedNames = sortItems<string>(names, (a, b) => a.localeCompare(b))
  console.log(sortedNames);
// any, unknown, never
  // can use any type to allow anything
  // any does remove type completion
  // unknown represents any value, but is safer, because you cannot do anything with it
  
  // this code below is a problem with 'as'
  const x = 'hello' as unknown as number;
  x.toFixed();

  // never type is used to represent an instance that should never exist
  // never can be used as a default case in a switch statement to prevent bad extensions or inputs, etc

// Type Assertions
  // use as when declaring a type when using a framework that doesn't support types


// @ts-ignore / @ts-nocheck

  // can allow you to prevent typescript from doing it's thing,
  // can result in runtime errors
  let myOtherName = 'andrew'
    // @ts-ignore
  myOtherName = 32;

  // can put @ts-nocheck at top off script to prevent all ts checking
