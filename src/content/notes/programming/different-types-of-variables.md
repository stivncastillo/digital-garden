---
title: "Different types in javascript"
description: "Types of variables in javascript"
publishedAt: 2023-08-17
updatedAt: 2023-08-17
category: "Programming"
subcategory: ""
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["javascript"]
---

# Primitives

Primitives are the basic building blocks of data in JavaScript. They represent simple values and are immutable, meaning they cannot be changed after they are created. There are six primitive data types in JavaScript:

1. **String:** Represents sequences of characters, like text. Enclosed in single or double quotes.
2. **Number:** Represents both integer and floating-point numbers. It includes whole numbers and decimals.
3. **Boolean:** Represents a true or false value, which is used for logical operations.
4. **Undefined:** Represents a variable that has been declared but has not been assigned a value.
5. **Null:** Represents an intentional absence of any value or object.
6. **Symbol:** Introduced in ECMAScript 6, it represents a unique and immutable value used primarily as object property keys.

# Non-primitive

Non-primitive types, also referred to as reference types, are more complex data types that can hold multiple values and methods. These types are not stored directly in the variable, but rather a reference to their location in memory is stored in the variable. This allows them to be mutable, meaning their values can change after creation. The primary non-primitive type in JavaScript is:

1. **Object:** Represents a collection of key-value pairs (properties and methods). It can hold various data types and can be customized.

Arrays, functions, and other more advanced constructs are also considered objects, as they inherit from the base `Object` type.

# Value by Reference

When the variable has a primitive value, the value is copy to new memory space:

```javascript
var y = 234;
var z = y;

var y = #8454; // y pointing to address of the value 234

var z = y; 
     
var z = #5411; // z pointing to a completely new address of the value 234
     
// Changing the value of y
y = 23;
console.log(z);  // Returns 234, since z points to a new address in the memory so changes in y will not effect z
```

When the value is non-primitive (object), the value is copy as reference. It means that if the object is mutated all references change its values

```javascript
var obj = { name: "Vivek", surname: "Bisht" };
var obj2 = obj;

var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }
var obj2 = obj;
    
var obj2 = #8711; // obj2 pointing to the same address 

// changing the value of obj1
        
obj1.name = "Akki";
console.log(obj2);
        
// Returns {name:"Akki", surname:"Bisht"} since both the variables are pointing to the same address.
```