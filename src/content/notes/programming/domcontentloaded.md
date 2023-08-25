---
title: "DOMContentLoaded"
description: "The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading."
publishedAt: 2023-06-13
updatedAt: 2023-06-13
category: "Programming"
author: "stiven-castillo"
published: true
lang: "EN"
tags: ["DOM"]
---

The **`DOMContentLoaded`** event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.

```js
addEventListener("DOMContentLoaded", (event) => {});

onDOMContentLoaded = (event) => {};
```
https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

## Load event

The **`load`** event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images.

```js
addEventListener("load", (event) => {});

onload = (event) => {};
```