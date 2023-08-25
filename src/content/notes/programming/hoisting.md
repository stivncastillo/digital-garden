---
title: "Hoisting"
description: "Hoisting is the default behavior of javascript where all the variable and function declarations are moved on top during the compilation phase."
publishedAt: 2023-08-17
updatedAt: 2023-08-17
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["javascript"]
---

Hoisting is the default behavior of javascript where all the variable and function declarations are moved on top during the compilation phase.

There are two main aspects of hoisting:

1. **Variable Hoisting:** Variable declarations using `var` are hoisted to the top of their scope, but their assignments are not. This means that you can use a variable before it's declared without causing a syntax error, although its value will be `undefined`.
   
```javascript
console.log(myVar); // Output: undefined
var myVar = 42;
```

2. **Function Hoisting:** Function declarations are also hoisted to the top of their scope. This means you can call a function before it's defined in the code.
   
```javascript
myFunction(); // Output: "Hello, world!"
function myFunction() {
  console.log("Hello, world!");
}
```

It's important to note that variable declarations using `let` and `const` are also hoisted, but they are placed in a "temporal dead zone" where they cannot be accessed until their declaration is encountered in the code. This prevents you from accessing variables before they're properly initialized, which is a common source of errors.