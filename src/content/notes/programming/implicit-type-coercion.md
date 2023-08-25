---
title: "Implicit Type Coercion"
description: "Implicit type coercion in javascript is the automatic conversion of value from one data type to another."
publishedAt: 2023-08-17
updatedAt: 2023-08-17
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["javascript"]
---

Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes place when the operands of an expression are of different data types.

## String coercion

String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type is always converted to the string type.


```javascript
var x = 3;
var y = "3";
x + y // Returns "33" 
```

Note - Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that, a string is converted to a number and then subtraction takes place.

```javascript
var x = 3;
Var y = "3";
x - y    //Returns 0 since the variable y (string type) is converted to a number type
```

## Boolean Coercion

Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks. To understand boolean coercion in if statements and operators, we need to understand truthy and falsy values.  
  
Truthy values are those which will be converted (coerced) to **true**. Falsy values are those which will be converted to **false**.  
  
All values except **false, 0, 0n, -0, “”, null, undefined, and NaN** are truthy values.

## Logical operators:

Logical operators in javascript, unlike operators in other programming languages, **do not return true or false. They always return one of the operands.**  
  
**OR ( | | ) operator** - If the first value is truthy, then the first value is returned. Otherwise, always the second value gets returned.  
  
**AND ( && ) operator** - If both the values are truthy, always the second value is returned. If the first value is falsy then the first value is returned or if the second value is falsy then the second value is returned.

```javascript
var x = 220;
var y = "Hello";
var z = undefined;
        
x || y    // Returns 220 since the first value is truthy
        
x || z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy
        
y && z   // Returns undefined since the second value is falsy
```

That is the reason why we can use && operator in jsx to return a component

```jsx
const x = true;
...
{ x && <span>truthy</span> }
```