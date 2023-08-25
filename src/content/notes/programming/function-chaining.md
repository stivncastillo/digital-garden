---
title: "Function chaining"
description: "Function chaining is a programming technique in which multiple methods are called on the same object one after another, allowing you to perform a sequence of operations in a concise and readable manner"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "ES"
tags: ["javascript"]
---

Function chaining, also known as method chaining, is a programming technique in which multiple methods are called on the same object one after another, allowing you to perform a sequence of operations in a concise and readable manner. Each method in the chain returns the object itself, enabling you to continue calling methods on the result of the previous method.

```javascript
var obj = function(){
      this.i = 0;
      this.add = function(i){
         this.i += i;
         return this;
      };
      this.subtract = function(i){
         this.i -= i;
         return this;
      };
      this.print = function(){
         document.write(this.i);
      }
}
var x = new obj();
x.add(5).subtract(2).print();
```

Another example is:

```javascript
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(num) {
    this.value += num;
    return this; // Return the object for chaining
  }

  subtract(num) {
    this.value -= num;
    return this; // Return the object for chaining
  }

  multiply(num) {
    this.value *= num;
    return this; // Return the object for chaining
  }

  divide(num) {
    this.value /= num;
    return this; // Return the object for chaining
  }

  getValue() {
    return this.value;
  }
}

const result = new Calculator(10)
  .add(5)
  .multiply(2)
  .subtract(3)
  .divide(2)
  .getValue();

console.log(result); // Output: 7

```

In this example, the `Calculator` class has methods for performing arithmetic operations. Each method returns `this`, allowing you to chain methods together in a sequence. The final value is obtained by calling the `getValue` method.