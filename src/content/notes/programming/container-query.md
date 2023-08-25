---
title: "Container query"
description: "Container queries are a new CSS feature that allows you to apply styles to an element based on the size of its container"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["css", "container", "queries"]
---

Container queries are a new CSS feature that allows you to apply styles to an element based on the size of its container. This is different from media queries, which apply styles to an element based on the size of the browser window or other device characteristics.

Container queries are used to create more flexible and adaptable designs. For example, you can use a container query to hide an element when the container is too small. Or, you can use a container query to change the font size of an element when the container is wider.

Container queries can be used with any HTML element, but they are especially useful with container elements, such as `<div>`, `<section>`, and `<article>`.

The syntax of container queries is similar to that of media queries. You use a `@container` rule, followed by a container name and a condition. The condition can be a size comparison or a ratio comparison.

Here is an example of a container query:

```
@container (min-width: 600px) {
  .my-element {
    width: 50%;
  }
}
```

This container query will change the size of the `.my-element` element to 50% of the container width when the container width is greater than 600 pixels.

Here is another example of a container query:

```css
@container (min-width: 600px) and (max-width: 1200px) {
  .my-element {
    font-size: 18px;
  }
}
```

This container query will change the font size of the `.my-element` element to 18 pixels when the container width is between 600 and 1200 pixels.

Container queries are still under development, but they are already supported by most modern browsers.

[CSS Container Queries: A First Look + Demo](https://www.bram.us/2021/03/28/css-container-queries-a-first-look-and-demo/)