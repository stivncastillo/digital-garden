---
title: "Prototype Partten"
description: "It focuses on creating objects by copying or cloning existing objects"
publishedAt: 2023-08-16
updatedAt: 2023-08-16
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["patterns"]
---

It focuses on creating objects by copying or cloning existing objects, rather than creating new objects from scratch.

It allows you to create new instances of a class by using a prototype object as a blueprint. This pattern is particularly useful when the cost of creating a new object is expensive in terms of time or resources.

The key idea behind the Prototype Design Pattern is that you create a prototype object that serves as a template for creating new objects. This prototype object contains the initial state and behavior of the objects you want to create. Instead of instantiating a new object using a constructor, you clone the prototype object and then modify its properties as needed.

```javascript 
// Prototype (template) object
const carPrototype = {
  wheels: 4,
  color: 'black',
  clone() {
    return Object.create(this);
  }
};

// Create new instances by cloning the prototype
const car1 = carPrototype.clone();
car1.color = 'red';

const car2 = carPrototype.clone();
car2.color = 'blue';

console.log(car1); // { wheels: 4, color: 'red', clone: [Function] }
console.log(car2); // { wheels: 4, color: 'blue', clone: [Function] }

```
