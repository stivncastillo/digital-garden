---
title: "Color Functions"
description: "Adds two new functions: color-mix(), color-contrast() and extends the existing ones with a relative color syntax."
publishedAt: 2023-08-24
updatedAt: 2023-08-24
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["color"]
---

Adds two new functions: `color-mix()`, `color-contrast()` and extends the existing ones with a relative color syntax.

- The `color-mix()` function allows you to mix two colors in a given color space.

```css
.text-primary-dark {
  color: color-mix(var(--theme-primary), black 10%);
}
.text-primary-darker {
  color: color-mix(var(--theme-primary), black 20%);
}
```

- The `color-contrast()` function allows you to select the best color from a list of colors that meets or exceeds the contrast criteria compared to a given base color.

```css
/* Compares wheat against tan, sienna, and #d2691e */
/* Sienna will be selected as it has a contstast of 4.273 
against wheat, which exceeds the threshold of AA-large (3) */
color-contrast(wheat vs tan, sienna, #d2691e to AA-large)
```

- With the relative color syntax, you can manipulate and convert any color to any format.

```css
:root {
  --color: #ff0000;
}

.selector {
  /* change the transparency */
  color: hsl(from var(--color) h s l / .5);
  
  /* change the hue */
  color: hsl(from var(--color) calc(h + 180deg) s l);
  
  /* change the saturation */
  color: hsl(from var(--color) h calc(s + 5%) l);
}
```

[Create a color theme with CSS Relative Color Syntax, CSS color-mix(), and CSS color-contrast()](https://www.bram.us/2021/04/28/create-a-color-theme-with-css-relative-color-syntax-css-color-mix-and-css-color-contrast/)
[Dynamic Color Manipulation with CSS Relative Colors](https://www.bram.us/2021/11/26/dynamic-color-manipulation-with-css-relative-colors/)

[Simplify Your Color Palette with CSS Color-Mix()](https://yuschick.medium.com/simplify-your-color-palette-with-css-color-mix-ec4967284dce)
