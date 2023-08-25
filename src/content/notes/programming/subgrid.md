---
title: "Subgrid"
description: "Subgrid css"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["css", "grid"]
---

When nesting grids, it is difficult to align nested grid elements with the main grid. That is where the subgrid comes into play: by setting `grid-template-columns` or `grid-template-rows` to `subgrid`, it will align with the main grid.


```css
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```
