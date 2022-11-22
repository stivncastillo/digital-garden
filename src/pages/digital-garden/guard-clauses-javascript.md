---
layout: "@layouts/BlogPostLayout.astro"
title: "Guard clauses in javascript"
publishedAt: "2022-09-27"
description: "The Guard clauses are a great alternative to if...else statements."
category: "Code"
author: "Stiven Castillo"
---

Check one by one the conditions of the function before the function finish the execution, this way we avoid that the indentation makes difficult the reading of the code. Without this we would have to read the whole function line by line to understand its operation.

The **Guard clauses** are a great alternative to `if...else` statements.
The idea is to check one by one the conditions of the function avoiding the nesting of these.

```javascript
function userIsAdmin(user) {
  if (user.role == "admin") {
    if (user.manager == true) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
```

In the previous example we have several nested if...else, we can refactor this function with Guard Clauses as follows:

```javascript
function userIsAdmin(user) {
  if (user.role !== "admin") return false;
  if (!user.manager) return false;
  return true;
}
```

It's much more readable and in only 4 lines of code.
