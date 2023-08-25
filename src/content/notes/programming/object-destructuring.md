---
title: "Object Destructuring"
description: "Object destructuring is a new way to extract elements from an object or an array."
publishedAt: 2023-08-17
updatedAt: 2023-08-17
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["javascript"]
---

Object destructuring is a new way to extract elements from an object or an array.

Object destructuring is a feature in JavaScript that allows you to extract properties from objects and assign them to variables in a more concise and readable way. It's a powerful tool for working with objects and accessing their properties without repetitive code.

**Object destructuring:** Before ES6 version:

```javascript
const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard:1
}

const classStrength = classDetails.strength;
const classBenches = classDetails.benches;
const classBlackBoard = classDetails.blackBoard;
```

The same example using object destructuring:

```javascript
const classDetails = {
  strength: 78,
  benches: 39,
  blackBoard:1
}

const {strength:classStrength, benches:classBenches,blackBoard:classBlackBoard} = classDetails;

console.log(classStrength); // Outputs 78
console.log(classBenches); // Outputs 39
console.log(classBlackBoard); // Outputs 1
```