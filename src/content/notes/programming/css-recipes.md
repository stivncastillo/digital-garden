---
title: 'CSS Recipes'
publishedAt: 2022-10-03
updatedAt: 2022-10-03
description: 'Useful CSS techniques, tricks and snippets'
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["web-development", "css"]
---

## Container Query

It is the ability of an element to render in different shapes according to the size of its parent container.

```css
.sidebar {
  container-type: inline-size;
  container-name: sidebar;
}
```
```css
@container sidebar (min-width: 400px){
  .card {
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
}
```
Ver más en la referencia https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries


## Subgrid

When nesting grids, it is difficult to align the nested grid elements with the main grid. That is where the subgrid comes into play: by setting `grid-template-columns` or `grid-template-rowsen` subgrid, it will align with the main grid.

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

## 3 ways to center an element

### With Grid

```css
.grid {
  display: grid;
  place-items: center;
}
```

### With absolute position

```css
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
```

### With Flex

```css
.flex {
  display: flex;
  align-items: center;
  justify-content: center;
}
```