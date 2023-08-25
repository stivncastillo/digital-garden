---
title: "Stop using useMemo"
description: "this approach only causes bad readability and increased memory usage."
publishedAt: 2023-06-08
updatedAt: 2023-06-08
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["react", "useMemo"]
---

## Stop using useMemo
this approach only causes bad readability and increased memory usage.

**One more** important thing to keep in mind is that useMemo brings value only in rerender phase. During its initialization, memoization slows down the application and this effect has a tendency to stack up. That’s what I meant by saying “memoization doesn’t come for free”.

**Avoid using useMemo in these scenarios:**

- **The calculation you’re trying to optimize is cheap**. In these cases, the overhead of using useMemo would outweigh the benefits
- **When you’re not sure if you need memoization**. It is better to start without it and then incorporate optimizations gradually into your code as problems occur
- **The value you’re memoizing is not passed down into components.** If the value is used only in JSX and isn’t passed deeper into a component tree, most of the time you can avoid optimizations. There is no need to remember its reference as it doesn’t influence other component's re-render
- **The dependency array changes too frequently**. In this case, useMemo will not give any performance benefits as it recalculates all we time

https://javascript.plainenglish.io/stop-using-usememo-now-e5d07d2bbf70