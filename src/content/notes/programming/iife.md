---
title: "IIFE"
description: "Immediately Invoked Function Expression"
publishedAt: 2023-08-17
updatedAt: 2023-08-17
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["javascript"]
---

IIFE stands for "Immediately Invoked Function Expression." It's a design pattern in JavaScript that involves defining and executing a function immediately after it's created. IIFE is often used to create a private scope for variables, preventing them from polluting the global scope and helping to manage variable lifetimes.

```js
(function() {
  // code inside this function is executed immediately
  var localVar = "I am a local variable.";
  console.log(localVar);
})();

// localVar is not accessible here, it's confined to the IIFE's scope
```

IIFEs are often used to encapsulate code and create modular code structures. They were more commonly used before ES6 introduced block-scoped variables