---
title: "Style queries"
description: "Style queries let us query a CSS property or CSS variable for a container."
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["css", "queries", "container"]
---

## Style queries
In simple words, style queries let us query a CSS property or CSS variable for a container.

```css
.page-header {
  display: flex;
}

@container style(display: flex) {
  .page-header__start {
    flex: 1;
    display: flex;
    align-items: center;
    border-right: 1px solid lightgrey;
  }
}
```

https://ishadeed.com/article/css-container-style-queries