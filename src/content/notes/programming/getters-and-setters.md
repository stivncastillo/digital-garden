---
title: "Getters y Setters"
description: "Getters and setters are special functions that allow you to define the behavior of getting and setting a property of an objec"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["javascript", "get", "set"]
---

Getters and setters are special functions that allow you to define the behavior of getting and setting a property of an object. They provide a way to encapsulate access to object properties and add additional logic or validation.

Getters and setters are defined using the `get` and `set` keywords within an object literal, or as part of a class definition.

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

console.log(person.fullName); // Output: John Doe

person.fullName = 'Jane Smith';
console.log(person.firstName); // Output: Jane
console.log(person.lastName); // Output: Smith
```

Getters and setters can be useful for performing additional operations or validations when getting or setting a property value. They provide a way to control access to object properties and add a layer of abstraction to the underlying data.

It's important to note that getters and setters are not limited to object literals. They can also be used in class definitions, where they provide similar functionality but with a different syntax.