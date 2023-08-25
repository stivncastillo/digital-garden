---
title: "Spread operator"
description: "It is used to expand elements of an array or object in places where multiple elements or properties are expected"
publishedAt: 2023-08-24
updatedAt: 2023-08-24
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: []
---

**Rest Parameter (`...`):**

The rest parameter allows you to represent an indefinite number of arguments as an array. It's denoted by the `...` prefix followed by a parameter name in a function declaration. This parameter will collect all the remaining arguments passed to the function as an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

**Spread Operator (`...`):**

The spread operator, also denoted by `...`, is used to expand elements of an array or object in places where multiple elements or properties are expected. It can be used in array literals, function arguments, object literals, and more.

```javascript
const numbers = [1, 2, 3]; 
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // Output: 6
```

In this example, the spread operator is used to spread the elements of the `numbers` array as individual arguments to the `sum` function.

The spread operator is not limited to arrays; it can also be used to clone arrays, concatenate arrays, and spread object properties into other objects:

```javascript
const array1 = [1, 2, 3]; 
const array2 = [4, 5, 6]; 
const combinedArray = [...array1, ...array2]; // [1, 2, 3, 4, 5, 6]

const originalObject = { x: 1, y: 2 }; 
const clonedObject = { ...originalObject }; // { x: 1, y: 2 }
```