---
title: "Generators"
description: "Are special functions that can be paused and resumed during their execution"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["javascript", "generators"]
---

In JavaScript, generators are special functions that can be paused and resumed during their execution. They allow you to define an iterative algorithm by writing a function that can yield multiple values over time, instead of returning a single value. Generators provide a powerful way to work with sequences of data.

To define a generator function, you use the `function*` syntax. Inside the generator function, you can use the `yield` keyword to produce a value and temporarily pause the execution. Here's an example to demonstrate how generators work:

```js
function* numberGenerator() {   yield 1;   yield 2;   yield 3; }

const generator = numberGenerator();  

console.log(generator.next().value);
// Output: 1 
console.log(generator.next().value);
// Output: 2 
console.log(generator.next().value);
// Output: 3 
console.log(generator.next().value); 
// Output: undefined
```

```js

function* squareGenerator() {
	const number = yield 'Provide a number: ';   
	yield number * number; 
}  

const square = squareGenerator(); console.log(square.next().value); 
// Output: Provide a number: 
console.log(square.next(5).value); 
// Output: 25
```

## When should we use generators

- one can choose to jump out of a function and let outer code to determine when to jump back into the function.
- the control of asynchronous call can be done outside of your code