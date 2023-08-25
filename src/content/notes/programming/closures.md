---
title: "Closures"
description: "Un closure es una función interna que tiene acceso al alcance de su función externa incluso después de que la función externa se ejecute"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "ES"
tags: ["javascript", "closures"]
---

A closure is a fundamental concept in JavaScript that refers to the ability of a function to "remember" and access its lexical scope even when it's executed outside that scope. In simpler terms, a closure allows a function to maintain access to the variables and parameters of its parent function, even after the parent function has finished executing.

Closures are created when a function is defined within another function and then returned or passed as an argument to other functions. The inner function still has access to its outer function's variables, even if the outer function has already completed execution.

Here's a simple example to illustrate closures:

```javascript
function outerFunction() {
  const outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Output: "I am from the outer function"
```

In this example, `innerFunction` is defined within `outerFunction`. When `outerFunction` is called and returns `innerFunction`, a closure is created. Even though `outerFunction` has finished executing, `innerFunction` still has access to the `outerVariable` because of the closure.

Closures are powerful and useful in many scenarios:

1. **Data Encapsulation:** Closures enable encapsulation by allowing variables to be kept private within a function, but still accessible to other functions that are returned.
    
2. **Module Pattern:** Closures can be used to create modules with private and public methods, allowing you to expose only what's necessary.
    
3. **Callbacks:** Closures are commonly used in event handlers and asynchronous operations to maintain context and access to variables.
    
4. **Currying:** Closures can be used to implement currying, where a function returns another function with partially applied arguments.
    

However, it's important to be mindful of memory management when using closures, as they can potentially lead to memory leaks if not handled properly, especially in long-lived applications.