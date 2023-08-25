---
title: "Script type"
description: "Script type"
publishedAt: 2023-06-07
updatedAt: 2023-06-07
category: "Programming"
author: "stiven-castillo"
published: true
lang: "ES"
tags: ["javascript"]
---

```jsx
<script {mode} ... />
```

### Async

Descarga el script paralelamente y detiene la generación del html para ejecutarse, normalmente lo usa google analytics

los scripts `async` cargan en segundo plano y se ejecutan cuando están listos. El DOM y otros scripts no esperan por ellos, y ellos no esperan por nada. Un script totalmente independiente que se ejecuta en cuanto se ha cargado.

Esta práctica puede usarse con scripts de terceros, scripts que no necesitan que el dom esté cargado y que no dependan de ningun otro script

### Defer

La petición va a correr asincronamente, cuando se termine de cargar el html, se ejecuta el script

indica al navegador que no espere por el script. En lugar de ello, debe seguir procesando el HTML, construir el DOM. El script carga “en segundo plano” y se ejecuta cuando el DOM esta completo.